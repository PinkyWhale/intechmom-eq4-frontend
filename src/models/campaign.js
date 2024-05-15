import { Schema, model } from "mongoose";

const campaignModelo = new Schema({
  redSocial: {
    type: String,
    require: true,
  },
  ubicacion: {
    type: String,
    require: true,
  },
  isSpecialDate: {
    type: Boolean,
    require: true,
  },
  content: {
    type: Boolean,
    require: true,
  },
  discount: {
    type: String,
    require: true,
  },
  formatType: {
    // imagen o video, No se necesita para la respuesta api
    type: Boolean,
    require: true,
  },
  publicationTypes: {
    // tipo de publiicacion, No se necesita para la respuesta api
    type: String,
    require: true,
  },
  responseAI: {
    type: String,
    required: false,
  },
});

export default model("campaign", campaignModelo);
