const Joi = require("joi");

const createElevatorSchema = Joi.object({
  UserEntreprenuer: Joi.string().required().min(3).max(200),
  story: Joi.string().required().min(3).max(200),
  branName: Joi.string().required().min(3).max(200),
  whatSell: Joi.string().required().min(3).max(200),
  howSell: Joi.string().required().min(3).max(200),
  audienceTarget: Joi.string().required(),
  starProduct: Joi.string().required().min(3).max(200),
  starProductDescription: Joi.string().required().min(3).max(200),
  brandPersonality: Joi.string().required().min(3).max(200),
  urlFacebook: Joi.string()
    .uri()
    .pattern(/^https:\/\//),
  urlInstagram: Joi.string()
    .uri()
    .pattern(/^https:\/\//)
    .required(),
  urlTiktok: Joi.string()
    .uri()
    .pattern(/^https:\/\//),
  urlGoogleMaps: Joi.string()
    .uri()
    .pattern(/^https:\/\//),
  ResponseAi: Joi.string().required(),
});

const validateCreation = async (request, response, next) => {
  try {
    await createElevatorSchema.validateAsync(request.body);
    next();
  } catch (error) {
    response.send(error);
  }
};

module.exports = { validateCreation };
