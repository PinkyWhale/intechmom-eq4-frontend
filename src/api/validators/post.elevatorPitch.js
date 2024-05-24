const Joi = require("joi");

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
  urlFacebook: Joi.string()
    .uri()
    .pattern(/^https:\/\//)
    .optional(),
  urlInstagram: Joi.string()
    .uri()
    .pattern(/^https:\/\//)
    .required(),
  urlTiktok: Joi.string()
    .uri()
    .pattern(/^https:\/\//)
    .optional(),
  urlGoogleMaps: Joi.string()
    .uri()
    .pattern(/^https:\/\//)
    .optional(),
  urlYouWeb: Joi.string()
    .uri()
    .pattern(/^https:\/\//)
    .optional(),
});

const validateCreationElevator = async (request, response, next) => {
  try {
    await createElevatorSchema.validateAsync(request.body);
    next();
  } catch (error) {
    response.status(400).send(error);
  }
};

module.exports = { validateCreationElevator };
