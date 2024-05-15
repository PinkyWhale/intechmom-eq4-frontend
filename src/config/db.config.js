require("dotenv").config();
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conexión correcta a MongoDB");
  } catch (error) {
    console.error("Error de conexión:", error);
    process.exit(1);
  }
};

module.exports = dbConnection;
