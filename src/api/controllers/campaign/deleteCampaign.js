const Campaign = require("../../../models/campaign.js");

const deleteCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await Campaign.findByIdAndDelete(id);
    console.log(removed);
    if (removed) {
      res.status(200).json(`${removed} deleted from the database`);
    } else {
      res.status(404).json({ message: "Campaign not found" });
    }
  } catch (error) {
    res.status(500).json({ message: `Error deleting campaign: ${error}` });
  }
};

module.exports = deleteCampaign;
