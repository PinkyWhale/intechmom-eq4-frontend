const express = require("express");
const router = express.Router();
const modelUser = require("../models/users");
const { validateEmail, validateUser } = require("../validations/post.user");

// Ruta para obtener todos los usuarios
router.get("/users", async (req, res) => {
  try {
    const users = await modelUser.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error.message);
    res.status(500).send("Error al obtener los usuarios");
  }
});

// Ruta para obtener un usuario por su ID
router.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  modelUser.findById(id)
    .then(user => {
      if (!user)
        res.status(404).send({ message: "Usuario no encontrado con el ID " + id });
      else res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).send({ message: "Error al recuperar el usuario con el ID " + id });
    });
});

// Ruta para eliminar un usuario por su ID
router.delete("/users/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const deletedUser = await modelUser.findOneAndDelete({ id: userId });

    if (!deletedUser) {
      return res.status(404).send("Usuario no encontrado");
    }

    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el usuario:", error.message);
    res.status(500).send("Error al eliminar el usuario");
  }
});

// Ruta para crear un nuevo usuario
router.post("/users", async (req, res) => {
  try {
    const user = req.body;
    if (!validateUser(user)) {
      return res.status(400).json({ error: "Datos de usuario no válidos" });
    }

    // Aquí validamos el correo electrónico
    if (!validateEmail(user.email)) {
      return res.status(400).json({ error: "Correo electrónico inválido" });
    }

    const newUser = new modelUser(user);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error al crear el usuario:", error.message);
    res.status(500).send("Error al crear el usuario");
  }
});

// Ruta para actualizar un usuario por su ID
router.put("/users/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const userData = req.body;

    if (!validateUser(userData)) {
      return res.status(400).json({ error: "Datos de usuario no válidos" });
    }

    // Aquí validamos el correo electrónico
    if (userData.email && !validateEmail(userData.email)) {
      return res.status(400).json({ error: "Correo electrónico inválido" });
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

module.exports = router;
