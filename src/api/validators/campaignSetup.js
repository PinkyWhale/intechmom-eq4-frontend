import Joi from "joi";

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
