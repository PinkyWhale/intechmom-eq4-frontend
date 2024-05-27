const getCampaignBy = require("../../utils/helpers");
const Joi = require("joi");

const getCampaignByHandler = async (req, res) => {
  try {
    const schema = Joi.object({
      campaignName: Joi.string().required(),
    });

    const { error } = schema.validate(req.query);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { campaignName } = req.query;
    const campaignFound = await getCampaignBy(campaignName);
    if (!campaignFound.length) {
      return res.status(404).json({ message: "OOPS! Not Found" });
    }
    res.status(200).json(campaignFound);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
};

module.exports = { getCampaignByHandler };
