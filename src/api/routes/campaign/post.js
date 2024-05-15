import OpenAI from "openai";
import User from "../../../../models/campaign.js";
import { openAiApiKey } from "../../../../config/index.js";

const socialMedia = {
  faceboock: {
    name: "Faceboock",
  },
  instagram: {
    name: "Instagram",
  },
  tikTok: {
    name: "Tik Tok",
  },
};

const formatType = {
  img: {
    name: "imagen",
  },
  video: {
    name: "Video",
  },
};

const createCampaign = async (req, res) => {
  try {
    const mongoResponse = await User.create(req.body);
    const { name } = req.body; // Recuperar el nombre del usuario desde la solicitud. No se si esto este bien
    // Promise.all
    const responseAi = await generateCampaign(req.body);

    res.status(201).json({
      mongoResponse,
      responseAi,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Hay un error" });
  }
};

export { createCampaign };

async function generateCampaign(CampaignConfigs) {
  const openAiInstance = new OpenAI({ apiKey: openAiApiKey });
  const {
    redSocial,
    ubicacion, // no necesita el prompt
    isSpecialDate, // dia especila
    content, // video o imagen, no necesita el prompt
    //cree otro apartado para el descuento
    discount,
  } = CampaignConfigs;

  const mensajeUsuario = `#########Instrucción##########:
    Redacta un copy para ${socialMedia[redSocial].name} donde estoy haciendo un story telling 
    sobre ${name} para promocionarla por el ${isSpecialDate} con un ${discount}...
    `;

  const chatCompletion = await openAiInstance.chat.completions.create({
    messages: [{ role: "user", content: mensajeUsuario }],
    model: "gpt-3.5-turbo",
    // temperature: 0.7, ?? se necesita
    // max_tokens: 750 ??? se necesita
  });

  return chatCompletion.choices[0].message.content;
}
