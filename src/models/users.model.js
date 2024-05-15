import { Schema, model } from "mongoose";

const userModel = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("users", userModel);
