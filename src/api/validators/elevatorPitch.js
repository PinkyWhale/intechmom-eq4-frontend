const Joi = require("joi");

// Esquema de validación para la creación de un Elevator Pitch
const createElevatorSchema = Joi.object({
  UserEntreprenuer: Joi.string().required().min(3).max(200),
  story: Joi.string().required().min(3).max(200),
  brandName: Joi.string().required().min(3).max(200),
  whatSell: Joi.string().required().min(3).max(200),
  howSell: Joi.string().required().min(3).max(200),
  audienceTarget: Joi.string().required(),
  starProduct: Joi.string().required().min(3).max(200),
  starProductDescription: Joi.string().required().min(3).max(200),
  brandPersonality: Joi.string().required().min(3).max(200),
  urlFacebook: Joi.string() //(opcional)
    .uri()
    .pattern(/^https:\/\//)
    .optional(),
  urlInstagram: Joi.string()
    .uri()
    .pattern(/^https:\/\//)
    .required(),
  urlTiktok: Joi.string() //(opcional)
    .uri()
    .pattern(/^https:\/\//)
    .optional(),
  urlGoogleMaps: Joi.string() //(opcional)
    .uri()
    .pattern(/^https:\/\//)
    .optional(),
  urlYouWeb: Joi.string() //(opcional)
    .uri()
    .pattern(/^https:\/\//)
    .optional(),
});

// Middleware para validar la creación de un Elevator Pitch
const validateCreationElevator = async (request, response, next) => {
  try {
    await createElevatorSchema.validateAsync(request.body);
    next();
  } catch (error) {
    response.status(400).send(error);
  }
};

module.exports = { validateCreationElevator };
