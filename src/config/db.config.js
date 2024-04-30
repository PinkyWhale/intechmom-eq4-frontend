import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conexión a Mongo establecida");
  } catch (error) {
    console.error("Error en conexión a Mongo: ", error.message);
    process.exit(1);
  }
};

export default connectDB;
