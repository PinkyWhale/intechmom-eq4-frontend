const { Schema, model } = require("mongoose");

const campaignSchema = new Schema({
  campaignName: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  socialMedia: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  responseAI: {
    type: String,
    required: false,
  },
});

const Campaign = model("Campaign", campaignSchema);

module.exports = Campaign;
