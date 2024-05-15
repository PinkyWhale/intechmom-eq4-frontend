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
    required: true,
  },
  urlInstagram: {
    type: String,
    required: true,
  },
  urlTiktok: {
    type: String,
    required: true,
  },
  urlGoogleMaps: {
    type: String,
    required: true,
  },
  responseAI: {
    type: String,
    required: false,
  },
});

module.exports = model("Ecommerce", ecommerceSchema);
