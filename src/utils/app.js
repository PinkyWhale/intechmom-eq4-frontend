const express = require("express");
const { port } = require("../config");
const dbConnection = require("../config/db.config.js");
const routes = require("../api/routes/user.router");

const app = express();

app.use(express.json());

dbConnection(); // Conecta con la base de datos MongoDB

app.get("/", (_req, res) => {
  return res.status(200).json("El proyecto funciona correctamente").end();
});

app.use("/api", routes);

app.listen(port, (error) => {
  if (error) {
    console.log("Error del servidor:", error);
    process.exit(1);
  }
  console.log("Servidor escuchando en el puerto " + port);
});
