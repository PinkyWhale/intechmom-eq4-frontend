const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
const { config } = require("dotenv");
const Ecommerce = require("../../../models/elevator-pitch.js");

config(); // Carga las variables de entorno desde el archivo .env

const archetypes = {
  wise: {
    name: "Sabio",
    description:
      "Quiero que el texto me haga sentir que leo la verdad absoluta.",
    keywords: "Conocedor, Confiable, Poderoso",
  },
  innocent: {
    name: "Inocente",
    description:
      "Quiero que el texto me hagas sentir que todo es bello y feliz.",
    keywords: "Tranquilidad, Felicidad, Satisfacción",
  },
  common: {
    name: "Común",
    description:
      "Vives una vida común, pero se va convertir en una persona mejor.",
    keywords: "Mérito, Esfuerzo, Vida Tranquila",
  },
  creative: {
    name: "Creativo",
    description: "Quiero que el texto despierte mi imaginación.",
    keywords: "Imaginación, Invención, Creatividad",
  },
  heroic: {
    name: "Heroico",
    description:
      "Quiero que el texto me haga creer que puedo superar desafíos con valentía y sobrepasar los límites.",
    keywords: "Grandiosidad, Resistencia, Inspiración",
  },
  jester: {
    name: "Bufón",
    description: "Quiero que el texto me haga reír.",
    keywords: "Cómico, Humor, Fantasía",
  },
};

async function generateElevator(createElevatorPitchData) {
  const {
    UserEntreprenuer,
    story,
    brandName,
    whatSell,
    howSell,
    audienceTarget,
    starProduct,
    urlFacebook,
    urlInstagram,
    urlTiktok,
    urlGoogleMaps,
    brandPersonality,
  } = createElevatorPitchData;

  console.log("Brand Personality: ", brandPersonality);
  console.log("Archetypes: ", archetypes);

  const normalizedPersonality = brandPersonality.toLowerCase();
  if (!archetypes[normalizedPersonality]) {
    throw new Error(
      `El arquetipo '${brandPersonality}' no está definido en los arquetipos.`
    );
  }

  const archetype = archetypes[normalizedPersonality];

  let redesText = "";
  if (urlFacebook) redesText += `Facebook: ${urlFacebook}\n`;
  if (urlInstagram) redesText += `Instagram: ${urlInstagram}\n`;
  if (urlTiktok) redesText += `TikTok: ${urlTiktok}\n`;
  if (urlGoogleMaps) redesText += `Google Maps: ${urlGoogleMaps}\n`;

  const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
    model: "gemini-1.5-pro-latest",
    maxOutputTokens: 2048,
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
      },
    ],
  });

  const res = await model.invoke([
    [
      "human",
      `Redacta un Elevator Pitch de mi Marca la cual se llama ${brandName} utilizando la siguiente información del círculo de oro: ${whatSell}, ${howSell}, ${audienceTarget}.
      
      Mi perfil como emprendedora es el siguiente: ${story}.
      
      Mi nombre es ${UserEntreprenuer} y mi producto estrella es ${starProduct}. 
      
      Mis redes del emprendimiento son:
      ${redesText}
      
      Por favor utiliza una voz y tono para el Elevator Pitch de forma ${archetype.keywords}.`,
    ],
  ]);
}

const createEcommerce = async (req, res) => {
  try {
    const mongoResponse = await Ecommerce.create(req.body);
    const responseAi = await generateElevator(req.body);
    res.status(201).json({ mongoResponse, responseAi });
  } catch (error) {
    console.error("Error detallado:", error);
    res.status(400).json({
      message: "Error al crear el Elevator Pitch",
      error: error.message,
    });
  }
};

module.exports = {
  createEcommerce,
};
