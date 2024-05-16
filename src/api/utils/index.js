import { Router } from "express";
//import swaggerJsdoc from "swagger-jsdoc";
//import { serve, setup } from "swagger-ui-express";
//import swaggerSpecification from "../../config/swagger.js";

import {
  validateCreationCampaign,
  validatePatchCampaign,
} from "./validation/post.campaign.js";
import { validateCreation } from "./validation/post.perfil.js";

import { getByName } from "./controllers/get.js";

import { createCampaign } from "./controllers/Campaign/post.js";
import { createElevator } from "./controllers/perfil/post.js";
import editCampaign from "./controllers/Campaign/patch.js";
// import editcreateElevator from "./controllers/perfil/patch.js"; se necesita?
import deleteOne from "./controllers/delete.js";

const router = Router();

router
  // Rutas para la pantalla "ecommerce"
  .post("/Campaign", validateCreation, createElevator)

  // Rutas para la pantalla "Campaign"
  .post("/ecommerce", validateCreationCampaign, createCampaign)
  .patch("/Campaign/:id", validatePatchCampaign, editCampaign)
  // Rutas globales
  .get("/users", getByName)
  .delete("/users/:id", validateCreation, deleteOne);
// Documentación Swagger
//router.use("/docs", serve);
//router.get("/docs", setup(swaggerJsdoc(swaggerSpecification)));

export default router;
