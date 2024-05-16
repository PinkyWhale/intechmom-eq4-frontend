const { Router } = require("express");
const router = Router();

const { validateCreation } = require("../validators/post.elevatorPitch.js");
const {
  createElevatorPitch,
} = require("../controllers/ecommerce/createElevatorPitch.js");

router.post("/ecommerce", validateCreation, createElevatorPitch);

module.exports = router;
