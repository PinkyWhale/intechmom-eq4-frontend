const Campaign = require("../../../models/campaign.js");

// Función para eliminar una campaña por su ID
const deleteCampaign = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID de la campaña de los parámetros de la solicitud
    const removed = await Campaign.findByIdAndDelete(id);
    console.log(removed);

    // Verificar si se eliminó con éxito la campaña
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
