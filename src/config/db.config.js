const mongoose = require("mongoose");
const { dbUri } = require("./index");

console.log("DB_URI:", dbUri);

const dbConnection = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log("Conexión correcta a MongoDB");
  } catch (error) {
    console.error("Error de conexión:", error);
    process.exit(1);
  }
};

module.exports = dbConnection;
