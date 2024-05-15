import express from "express";
import db from "../../models/users.model.js";

const router = express.Router();

// Rutas CRUD
// CREATE - READ - UPDATE - DELETE
router.post("/api/users", async (req, res) => {
  try {
    const body = req.body;
    const ModelUser = db.ModelUser; // Importación del modelo de usuario
    const respuesta = await ModelUser.create(body);
    res.send(respuesta);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.get("/api/users", async (_req, res) => {
  try {
    const ModelUser = db.ModelUser; // Importación del modelo de usuario
    const respuesta = await ModelUser.find({});
    res.send(respuesta);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.get("/api/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const ModelUser = db.ModelUser; // Importación del modelo de usuario
    const respuesta = await ModelUser.findById(id);
    res.send(respuesta);
  } catch (error) {
    console.error("Error al obtener usuario por ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.put("/api/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const ModelUser = db.ModelUser; // Importación del modelo de usuario
    if (!id) {
      return res.status(400).json({ error: "Se requiere un ID válido" });
    }
    if (!body || Object.keys(body).length === 0) {
      return res
        .status(400)
        .json({ error: "Se requieren datos válidos para actualizar" });
    }
    const updatedUser = await ModelUser.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.delete("/api/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const ModelUser = db.ModelUser; // Importación del modelo de usuario
    const respuesta = await ModelUser.deleteOne({ _id: id });
    res.send(respuesta);
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;
