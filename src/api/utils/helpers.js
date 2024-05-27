const Campaign = require("../../models/campaign.js");

const getCampaignBy = async (filter) => {
  const campaignFound = await Campaign.find(filter);
  console.log(campaignFound);
  return campaignFound;
};

module.exports = getCampaignBy;
