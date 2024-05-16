// const OpenAI = require("openai");
const Ecommerce = require("../../../models/elevator-pitch.js");
const { config } = require("dotenv");
const generateMockResponse = require("./mockElevatorResponse.js");

config(); // Carga las variables de entorno desde el archivo .env

const archetypes = {
  wise: {
    name: "sabio",
    description:
      "Quiero que el texto me haga sentir que leo la verdad absoluta.",
    keywords: "Conocedor, Confiable, Poderoso.",
  },
  innocent: {
    name: "inocente",
    description:
      "Quiero que el texto me hagas sentir que todo es bello y feliz.",
    keywords: "Tranquilidad, Felicidad, satisfacción.",
  },
  common: {
    name: "común",
    description:
      "Vives una vida común, pero se va convertir en una persona mejor.",
    keywords: "mérito, esfuerzo, vida tranquila.",
  },
  creative: {
    name: "creativo",
    description: " Quiero que el texto despierte mi imaginación.",
    keywords: "Imaginación, Invención, Creatividad.",
  },
  heroic: {
    name: "Heroico",
    description:
      "Quiere que el texto me haga creer que puedo superar desafíos con valentía sobrepasar los  límites.",
    keywords: "Grandiosidad, resistencia, inspiración.",
  },
  jester: {
    name: "bufon",
    description: "Quiero que el texto me haga reir.",
    keywords: " Cómico, humor, fantasía.",
  },
  // Gobernante: Me hace sentir con el texto que eres un líder imponente. (descripción arquetipo)
  // Palabras clave: prestígio, liderazgo, poder.
  // Común: Vives una vida común, pero se va convertir en una persona mejor (descripción arquetipo)
  // Palabras Clave: mérito, esfuerzo, vida tranquila
  // Cuidador: Se sientas confortable, protegido (descripción arquetipo)
  // Palabras Clave: Amabilidad, cuidado, anidado
  // Amante: Nos dá deseo y demonstra fidelidad (descripción arquetipo)
  // Palabras Clave: Amor, Lealtad, Fijación
  // Bufón: Quiero que el texto me haga reir (descripción arquetipo)
  // Palabras clave: Cómico, humor, fantasía
  // Rebelde: Quero texto me haga sentir que puedo romper reglas (descripción arquetipo)
  // Palabras clave: Rebeldía, obstinación y oposición
  // Explorador: Quiero que me haga sentir que vamos a descubrir algo nuevo, o que me llevas en una aventura (descripción arquetipo)
  // Palabras clave: Sin límites, pioneiro, explorador
  // Creativo: Quiero que el texto despierte mi imaginación (descripción arquetipo)
  // Palabras clave: Imaginación, Invención, Creatividad
  // Héroe: Quiere que el texto me haga creer que puedo superar desafíos con valentía sobrepasar los  límites (descripción arquetipo)
  // Palabras clave: Grandiosidad, resistencia, inspiración
  // Mago: Quiero que el texto me haga sentir que todo se resuelve de forma sencilla. (descripción arquetipo)
  // Palabras clave: Libertad, magia, facilidad, geniosidad
};

const createEcommerce = async (req, res) => {
  try {
    const mongoResponse = await Ecommerce.create(req.body);
    const responseAi = await generateElevator(req.body);
    res.status(201).json({ mongoResponse, responseAi });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error al crear el Elevator Pitch" });
  }
};

module.exports = {
  createEcommerce,
};

async function generateElevator(createElevatorPitchData) {
  // Cambio de nombre de argumento
  try {
    const {
      UserEntreprenuer,
      story,
      branName,
      whatSell,
      howSell,
      audienceTarget,
      starProduct,
      urlFacebook,
      urlInstagram,
      urlTiktok,
      urlGoogleMaps,
      brandPersonality,
    } = createElevatorPitchData; // Cambio de nombre del objeto

    const redesEmprendimiento = (() => {
      const redes = [];
      if (urlFacebook) redes.push(`Facebook: ${urlFacebook}`);
      if (urlInstagram) redes.push(`Instagram: ${urlInstagram}`);
      if (urlTiktok) redes.push(`TikTok: ${urlTiktok}`);
      if (urlGoogleMaps) redes.push(`Google Maps: ${urlGoogleMaps}`);
      return redes.join(", ");
    })();

    const mensajeUsuario = `Redacta un Elevator Pich de mi Marca la cual se llama ${branName} utilizando la siguiente informacion del circulo de oro: ${whatSell}, ${howSell}, ${audienceTarget}.

Mi perfil como emprendedora es el siguiente: ${story}.
    
mi nombre es ${UserEntreprenuer} y mi producto estrella es ${starProduct}. ${
      redesEmprendimiento
        ? `Mis redes del emprendimiento son: ${redesEmprendimiento}.`
        : ""
    }

Por favor utiliza una Voz y tono para el Elevator Pich de forma ${
      archetypes[brandPersonality].keywords
    }.`;

    // Esta parte que llama a la API de OpenAI

    // const openAiInstance = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    // const chatCompletion = await openAiInstance.chat.completions.create({
    //   messages: [{ role: "user", content: mensajeUsuario }],
    //   model: "gpt-3.5-turbo",
    //   temperature: 0.7, // se necesita
    //   max_tokens: 750 // se necesita
    // });

    // Utiliza la función para generar el mock de respuesta
    const mockResponse = await generateMockResponse();
    return mockResponse.choices[0].message.content;
  } catch (error) {
    console.error("Error en la generación del Elevator Pitch:", error);
    throw error;
  }
}
