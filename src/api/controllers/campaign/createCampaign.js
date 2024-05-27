const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
const { config } = require("dotenv");
const Campaign = require("../../../models/campaign.js");
const mockGenerateCampaignResponse = require("../../../../mocks/generateCampaignMock.js");

config(); // Carga las variables de entorno desde el archivo .env

const colombianDepartments = [
  "Amazonas",
  "Antioquia",
  "Arauca",
  "Atlántico",
  "Bolívar",
  "Boyacá",
  "Bogotá D.C",
  "Caldas",
  "Caquetá",
  "Casanare",
  "Cauca",
  "Cesar",
  "Chocó",
  "Córdoba",
  "Cundinamarca",
  "Guainía",
  "Guaviare",
  "Huila",
  "La Guajira",
  "Magdalena",
  "Meta",
  "Nariño",
  "Norte de Santander",
  "Putumayo",
  "Quindío",
  "Risaralda",
  "San Andrés y Providencia",
  "Santander",
  "Sucre",
  "Tolima",
  "Valle del Cauca",
  "Vaupés",
  "Vichada",
];
const socialNetwork = ["Facebook", "Instagram", "TikTok", "Twitter"];
const mediaFormat = ["Foto", "Video"];

async function generateCampaign(campaignConfigs) {
  const { campaignName, reason, location, socialMedia, contentType } =
    campaignConfigs;

  // Aquí es donde normalmente harías la llamada al modelo de generación de LangChain
  /* const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
    model: "gemini-pro",
    maxOutputTokens: 2048,
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
      },
    ],
  });

  const createCampaign = await model.invoke([
    [
      "human",
      `Redacta tres copy para ${socialMedia} donde estoy haciendo una storytelling
      sobre la ${campaignName} para promocionarla por el ${reason}. Un copy para
      publicación Help, un copy para publicación Hub y el tercer copy para 
      publicación Hero.`,
    ],
  ]); */

  // En su lugar, utilizamos el mock
  const createCampaign = mockGenerateCampaignResponse;

  return createCampaign;
}

// Función para crear un registro de Campaign
const createCampaign = async (req, res) => {
  try {
    // Validar los datos de entrada aquí, si es necesario

    // Guardar la solicitud en la base de datos MongoDB
    const mongoResponse = await Campaign.create(req.body);
    // Generar una respuesta usando el modelo de LangChain
    const responseAi = await generateCampaign(req.body);
    // Enviar una respuesta con los resultados
    res.status(201).json({ mongoResponse, responseAi });
  } catch (error) {
    console.error("Error detallado:", error);
    res.status(400).json({
      message: "Error al crear el Campaign Pitch",
      error: error.message,
    });
  }
};

module.exports = {
  createCampaign,
};
