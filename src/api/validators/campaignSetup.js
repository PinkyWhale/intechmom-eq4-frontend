const Joi = require("joi");

// Esquema de validación para la creación de campañas
const createCampaignSchema = Joi.object({
  campaignName: Joi.string().required(),
  reason: Joi.string().required(),
  location: Joi.string().required(),
  socialMedia: Joi.string()
    .valid("Facebook", "Instagram", "TikTok", "Twitter")
    .required(),
  contentType: Joi.string().valid("img", "mp4").required(),
  ResponseAi: Joi.string().required(),
});

// Esquema de validación para actualizar campañas
const patchCampaignSchema = Joi.object({
  campaignName: Joi.string().required(),
  reason: Joi.string().required(),
  location: Joi.string().required(),
  socialMedia: Joi.string()
    .valid("Facebook", "Instagram", "TikTok", "Twitter")
    .required(),
  contentType: Joi.string().valid("img", "mp4").required(),
  ResponseAi: Joi.string().required(),
});

// Middleware para validar la creación de campañas
const validateCreationCampaign = async (request, response, next) => {
  await createCampaignSchema.validate(request.body);
  next();
  try {
  } catch (error) {
    response.send(error);
  }
};

// Middleware para validar la actualización de campañas
const validatePatchCampaign = async (request, response, next) => {
  await patchCampaignSchema.validate(request.body);
  next();
  try {
  } catch (error) {
    response.send(error);
  }
};

module.exports = { validateCreationCampaign, validatePatchCampaign };
