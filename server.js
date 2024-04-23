const express = require("express");
const app = express();
const userRoutes = require("./routers/user.router.js"); // Corregido el nombre del archivo

// Configuración de middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api/users", userRoutes);

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// Manejo de errores
app.use((req, res, next) => {
  res.status(404).send("Error 404: Not Found");
});

const db = require("./models");
const dbConfig = require("./config/db.config"); // Agregada la importación del archivo de configuración de la base de datos

const mongoose = require("mongoose");
const router = express.Router();

// Rutas CRUD
// CREATE - READ - UPDATE - DELETE
router.post("/", async (req, res) => {
  const body = req.body;
  const ModelUser = db.ModelUser; // Importación del modelo de usuario
  const respuesta = await ModelUser.create(body);
  res.send(respuesta);
});

router.get("/", async (req, res) => {
  const ModelUser = db.ModelUser; // Importación del modelo de usuario
  const respuesta = await ModelUser.find({});
  res.send(respuesta);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const ModelUser = db.ModelUser; // Importación del modelo de usuario
  const respuesta = await ModelUser.findById(id);
  res.send(respuesta);
});

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const ModelUser = db.ModelUser; // Importación del modelo de usuario
  const respuesta = await ModelUser.deleteOne({ _id: id });
  res.send(respuesta);
});

app.use(router);

const PORT = process.env.PORT || 3001;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
    app.listen(PORT, () => {
      console.log(`El servidor está en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Cannot connect to the database!", err);
    process.exit();
  });
