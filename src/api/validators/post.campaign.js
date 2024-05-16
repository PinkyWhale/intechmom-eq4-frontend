import Joi from "joi";

const createCampaignSchema = Joi.object({
  redSocial: Joi.string().required().min(3).max(30),
  ubicacion: Joi.string().required().min(3).max(30),
  isSpecialDate: Joi.boolean().required(),
  content: Joi.boolean().required(),
  discount: Joi.string().required().min(3).max(30),
  formatType: Joi.string().required(),
  publicationTypes: Joi.string().required().min(3).max(30),
  ResponseAi: Joi.string().required(),
});

const patchCampaignSchema = Joi.object({
  redSocial: Joi.string().required().min(3).max(30),
  ubicacion: Joi.string().required().min(3).max(30),
  isSpecialDate: Joi.boolean().required(),
  content: Joi.boolean().required(),
  discount: Joi.string().required().min(3).max(30),
  formatType: Joi.string().required(),
  publicationTypes: Joi.string().required().min(3).max(30),
  ResponseAi: Joi.string().required(),
});

const validateCreationCampaign = async (request, response, next) => {
  await createCampaignSchema.validate(request.body);
  next();
  try {
  } catch (error) {
    response.send(error);
  }
};

const validatePatchCampaign = async (request, response, next) => {
  await patchCampaignSchema.validate(request.body);
  next();
  try {
  } catch (error) {
    response.send(error);
  }
};

export { validateCreationCampaign, validatePatchCampaign };
