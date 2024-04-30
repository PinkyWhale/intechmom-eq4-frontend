import express from "express";
const router = express.Router();
import modelUser from "../models/users";
import { validateUser } from "../validations/userValidation";

router.post("/users", async (req, res) => {
  try {
    const user = req.body;
    if (!validateUser(user)) {
      return res.status(400).json({ error: "Datos de usuario no válidos" });
    }

    const newUser = new modelUser(user);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error al crear el usuario:", error.message);
    res.status(500).send("Error al crear el usuario");
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const userData = req.body;

    if (!validateUser(userData)) {
      return res.status(400).json({ error: "Datos de usuario no válidos" });
    }

    const updatedUser = await modelUser.findOneAndUpdate(
      { id: userId },
      userData,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("Usuario no encontrado");
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error al actualizar el usuario:", error.message);
    res.status(500).send("Error al actualizar el usuario");
  }
});

export default router;
