const express = require("express");

const { validateCreationElevator } = require("../validators/elevatorPitch.js");
const {
  validateCreationCampaign,
  validatePatchCampaign,
} = require("../validators/campaignSetup.js");

const {
  createEcommerce,
} = require("../controllers/ecommerce/createElevatorPitch.js");

const { createCampaign } = require("../controllers/campaign/createCampaign.js");
const {
  getCampaignByHandler,
} = require("../controllers/campaign/readCampaign.js");
const editCampaign = require("../controllers/campaign/updateCampaign.js");
const deleteCampaign = require("../controllers/campaign/deleteCampaign.js");

const router = express.Router();

router
  // Rutas para la pantalla "ecommerce"
  .post("/ecommerce", validateCreationElevator, createEcommerce)
  // Rutas para la pantalla "campaign"
  .post("/campaign", validateCreationCampaign, createCampaign)
  .get("/campaign", getCampaignByHandler)
  .patch("/campaign/:id", validatePatchCampaign, editCampaign)
  .delete("/campaign/:id", validateCreationCampaign, deleteCampaign);

module.exports = router;
