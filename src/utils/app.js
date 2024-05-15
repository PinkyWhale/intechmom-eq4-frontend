const express = require("express");
const { config } = require("dotenv");
const { port } = require("../config/index.js");
const dbConnection = require("../config/db.config.js");
const createElevatorPitch = require("../api/routes/ecommerce/createElevatorPitch.js");

config(); // Carga las variables de entorno desde el archivo .env

const app = express();

dbConnection(); // Conecta con la base de datos MongoDB

app.get("/", (_req, res) => {
  return res.status(200).json("El proyecto funciona correctamente").end();
});

app.use("/api", createElevatorPitch);

app.listen(port, (error) => {
  if (error) {
    console.log("Error del servidor:", error);
    process.exit(1);
  }
  console.log("Servidor escuchando en el puerto " + port);
});
