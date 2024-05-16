const { Router } = require("express");
const router = Router();
const { validateCreation } = require("../validators/post.elevatorPitch.js");
const { createElevator } = require("./ecommerce/createElevatorPitch.js");

router.post("/ecommerce", validateCreation, createElevator);

module.exports = router;
