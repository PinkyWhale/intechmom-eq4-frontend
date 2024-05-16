import { Router } from "express";

import { validateCreationElevator } from "../validators/post.elevatorPitch.js";

import { createElevator } from "../controllers/ecommerce/createElevatorPitch.js";

const router = Router();

router
  // Rutas para la pantalla "ecommerce"
  .post("/ecommerce", validateCreationElevator, createElevator);

export default router;
