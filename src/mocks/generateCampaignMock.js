const mockGenerateCampaignResponse = (campaignConfigs) => ({
  message: `
  Copy para publicación Help:
  "¿Lista para sorprender ${campaignConfigs.reason}? Acompáñame en la preparación de una deliciosa ${campaignConfigs.campaignName}, ¡el regalo perfecto para endulzar su corazón! Además, disfruta de un 30% de descuento en tu pedido. 🍰✨ #${campaignConfigs.reason} #${campaignConfigs.campaignName} #RegaloEspecial"
  
  Copy para publicación Hub:
  "¡Celebra el amor de ${campaignConfigs.reason} con un dulce detalle! Aprende con nosotros cómo preparar la ${campaignConfigs.campaignName} perfecta y disfruta de un 30% de descuento en tu compra. Haz de este día algo inolvidable. 🎁💖 #${campaignConfigs.reason} #${campaignConfigs.campaignName} #AmorInfinito"
  
  Copy para publicación Hero:
  "Este Día de ${campaignConfigs.reason}, demuéstrale cuánto la quieres con un regalo irresistible: ¡una deliciosa ${campaignConfigs.campaignName} casera! Aprende con nosotros la receta y disfruta de un 30% de descuento en tu pedido. Haz de este día algo dulce y especial. 🌸🍰 #${campaignConfigs.reason} #${campaignConfigs.campaignName} #AmorInfinito"
  `,
});

module.exports = mockGenerateCampaignResponse;
