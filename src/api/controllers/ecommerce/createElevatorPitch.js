import OpenAI from "openai";
import User from "../../models/elevator-pitch.js";
import { openAiApiKey } from "../../.config/index.js";

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
// FUNCION DE SERVERLES
exports.handler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
    const mongoResponse = await User.create(requestBody);

    const responseAi = await generateElevator(requestBody);

    return {
      statusCode: 200,
      body: JSON.stringify({
        mongoResponse,
        responseAi,
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "hay un error!?" }),
    };
  }
};

async function generateElevator(createElevatorPitch) {
  const openAiInstance = new OpenAI({ apiKey: openAiApiKey });
  const {
    UserEntreprenuer, // se trae campo de la bd nameEntreprenuer
    story,
    branName,
    whatSell,
    howSell,
    audienceTarget,
    starProduct,
    starProductDescription, //ANALIZAR PARA DATA ANALIS
    brandPersonality,
    urlFacebook,
    urlInstagram,
    urlTiktok,
    urlGoogleMaps,
  } = createElevatorPitch;

  // si algun dato es null el texto no se envia
  const redesEmprendimiento = (() => {
    const redes = [];
    if (urlFacebook) redes.push(`Facebook: ${urlFacebook}`);
    if (urlInstagram) redes.push(`Instagram: ${urlInstagram}`);
    if (urlTiktok) redes.push(`TikTok: ${urlTiktok}`);
    if (urlGoogleMaps) redes.push(`Google Maps: ${urlGoogleMaps}`);
    return redes.join(", ");
  })();

  // Promt
  const mensajeUsuario = `Redacta un Elevator Pich de mi Marca la cual se llama ${branName} utilizando la 
    siguiente informacion del circulo de oro: 
    ${whatSell}, ${howSell}, ${audienceTarget}.

    Mi perfil como emprendedora es el siguiente:
    ${story}.
    
    mi nombre es ${UserEntreprenuer} y mi producto estrella es ${starProduct}. 
    ${
      redesEmprendimiento
        ? `Mis redes del emprendimiento son: ${redesEmprendimiento}.`
        : ""
    }

    Por favor utiliza una Voz y tono para el Elevator Pich de forma ${
      archetypes[brandPersonality].keywords
    }.
    `;

  const chatCompletion = await openAiInstance.chat.completions.create({
    messages: [{ role: "user", content: mensajeUsuario }],
    model: "gpt-3.5-turbo",
    // temperature: 0.7, ?? se necesita
    // max_tokens: 750 ??? se necesita
  });

  return chatCompletion.choices[0].message.content;
}
