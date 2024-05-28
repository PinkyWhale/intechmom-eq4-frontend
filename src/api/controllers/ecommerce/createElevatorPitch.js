const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
const { config } = require("dotenv");
const Ecommerce = require("../../../models/elevator-pitch.js");
const mockGenerateElevatorResponse = require("../../../mocks/generateElevatorMock.js");

config(); // Carga las variables de entorno desde el archivo .env

// Definición de los arquetipos de marca con sus descripciones y palabras clave
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

// Función para generar un Elevator Pitch utilizando la configuración proporcionada
async function generateElevator(ElevatorPitchConfigs) {
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
    urlYouWeb,
    brandPersonality,
  } = ElevatorPitchConfigs;

  // Normalizar la personalidad de la marca a minúsculas para comparaciones consistentes
  const normalizedPersonality = brandPersonality.toLowerCase();

  // Verificar si la personalidad de la marca está definida en los arquetipos
  if (!archetypes[normalizedPersonality]) {
    throw new Error(
      `El arquetipo '${brandPersonality}' no está definido en los arquetipos.`
    );
  }

  // Obtener el arquetipo correspondiente a la personalidad de la marca
  const archetype = archetypes[normalizedPersonality];

  // Construir el texto de las redes sociales
  let redesText = "";
  if (urlFacebook) redesText += `Facebook: ${urlFacebook}\n`;
  if (urlInstagram) redesText += `Instagram: ${urlInstagram}\n`;
  if (urlTiktok) redesText += `TikTok: ${urlTiktok}\n`;
  if (urlGoogleMaps) redesText += `Google Maps: ${urlGoogleMaps}\n`;
  if (urlYouWeb) redesText += `Your Web: ${urlYouWeb}\n`;

  // Aquí es donde normalmente harías la llamada al modelo de generación de LangChain
  // Comentado para evitar llamadas en el desarrollo local, usa el mock en su lugar
  // const model = new ChatGoogleGenerativeAI({
  //   apiKey: process.env.GEMINI_API_KEY,
  //   model: "gemini-pro",
  //   maxOutputTokens: 2048,
  //   safetySettings: [
  //     {
  //       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
  //       threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  //     },
  //   ],
  // });

  // const createEcommerce = await model.invoke([
  //   [
  //     "human",
  //     `Redacta un Elevator Pitch de mi Marca la cual se llama ${brandName} utilizando la siguiente información del círculo de oro: ${whatSell}, ${howSell}, ${audienceTarget}.
  //     Mi perfil como emprendedora es el siguiente: ${story}.
  //     Mi nombre es ${UserEntreprenuer} y mi producto estrella es ${starProduct}.
  //     Mis redes del emprendimiento son:
  //     ${redesText}
  //     Por favor utiliza una voz y tono para el Elevator Pitch de forma ${archetype.keywords}.`,
  //   ],
  // ]);

  // Uso del mock para evitar dependencias externas durante el desarrollo
  const createEcommerce = mockGenerateElevatorResponse;

  return createEcommerce;
}

// Función para manejar la creación de un registro de ecommerce
const createEcommerce = async (req, res) => {
  try {
    // Validar los datos de entrada aquí, si es necesario

    // Guardar la solicitud en la base de datos MongoDB
    const mongoResponse = await Ecommerce.create(req.body);

    // Generar una respuesta usando el modelo de LangChain
    const responseAi = await generateElevator(req.body);

    // Enviar una respuesta con los resultados
    res.status(201).json({ mongoResponse, responseAi });
  } catch (error) {
    // Manejo del error sin imprimir en consola
    res.status(400).json({
      message: "Error al crear el Elevator Pitch",
      error: error.message,
    });
  }
};

module.exports = {
  createEcommerce,
};
