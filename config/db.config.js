require("dotenv").config();
const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("Conexion correcta");
  } catch (error) {
    console.error("Error de conexion:", error);
  }
};

module.exports = dbconnect;
