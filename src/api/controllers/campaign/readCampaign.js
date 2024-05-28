const getCampaignBy = require("../../utils/helpers");
const Joi = require("joi");

// Controlador para obtener una campaña por su nombre
const getCampaignByHandler = async (req, res) => {
  try {
    // Definir el esquema de validación para los parámetros de consulta
    const schema = Joi.object({
      campaignName: Joi.string().required(), // El nombre de la campaña es obligatorio
    });

    const { error } = schema.validate(req.query);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Obtener el nombre de la campaña de los parámetros de consulta
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
