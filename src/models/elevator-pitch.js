const { Schema, model } = require("mongoose");

const ecommerceSchema = new Schema({
  UserEntreprenuer: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  whatSell: {
    type: String,
    required: true,
  },
  howSell: {
    type: String,
    required: true,
  },
  audienceTarget: {
    type: String,
    required: true,
  },
  starProduct: {
    type: String,
    required: true,
  },
  starProductDescription: {
    type: String,
    required: true,
  },
  brandPersonality: {
    type: String,
    required: true,
  },
  urlFacebook: {
    type: String,
    required: false, // Cambiado a opcional
  },
  urlInstagram: {
    type: String,
    required: true,
  },
  urlTiktok: {
    type: String,
    required: false, // Cambiado a opcional
  },
  urlGoogleMaps: {
    type: String,
    required: false, // Cambiado a opcional
  },
  responseAI: {
    type: String,
    required: false,
  },
});

const Ecommerce = model("Ecommerce", ecommerceSchema);

module.exports = Ecommerce;
