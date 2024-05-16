const { Router } = require("express");
const router = Router();

const {
  validateCreationElevator,
} = require("../validators/post.elevatorPitch.js");
const {
  createEcommerce,
} = require("../controllers/ecommerce/createElevatorPitch.js");

router.post("/ecommerce", validateCreationElevator, createEcommerce);

module.exports = router;
