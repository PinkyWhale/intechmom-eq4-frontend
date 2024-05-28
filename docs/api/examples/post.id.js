module.exports = {
  endpoints: [
    {
      // Detalles del primer endpoint POST /api/ecommerce
      method: "POST", // Método HTTP
      path: "/api/ecommerce", // Ruta del endpoint
      description: "Crear una nueva entrada de Ecommerce.", // Descripción del endpoint
      request: {
        // Detalles de la solicitud
        url: "/api/ecommerce", // URL de la solicitud
        method: "POST", // Método HTTP de la solicitud
        headers: {
          "Content-Type": "application/json", // Cabecera de la solicitud
        },
        body: {
          // Cuerpo de la solicitud
          UserEntreprenuer: '<"Texto min 3 y max 200 caracteres">',
          story: '<"Texto min 3 y max 200 caracteres">',
          brandName: '<"Texto min 3 y max 200 caracteres">',
          whatSell: '<"Texto min 3 y max 200 caracteres">',
          howSell: '<"Texto min 3 y max 200 caracteres">',
          audienceTarget: '<"Texto min 3 y max 200 caracteres">',
          starProduct: '<"Texto min 3 y max 200 caracteres">',
          starProductDescription: '<"Texto min 3 y max 200 caracteres">',
          brandPersonality: '<"Input seleccionado por el usuario">',
          urlFacebook: '<"Red social opcional">',
          urlInstagram: '<"Red social obligatoria">',
          urlTiktokr: '<"Red social opcional">',
          urlGoogleMaps: '<"Red social opcional">',
        },
      },
      response: {
        // Detalles de la respuesta
        status: 200, // Código de estado HTTP
        body: {
          // Cuerpo de la respuesta
          responseAi: {
            message: "\n Texto generado por la IA ",
          },
        },
      },
    },

    // Detalles del segundo endpoint mongoResponse
    {
      mongoResponse: {
        UserEntreprenuer: "Lucia P.",
        story:
          "Lucía, líder apasionada con más de 30 años de experiencia, enfrenta desafíos con determinación y perseverancia.",
        brandName: "Achiras del Sagú",
        whatSell:
          "Ofrecemos experiencias gastronómicas únicas con productos de sagú. Cada bocado es un viaje de sabores y texturas por los paisajes colombianos, uniendo tradición e innovación.",
        howSell: "Nuestros productos artesanales reflejan pasión.",
        audienceTarget:
          "Nuestras Achiras son ideales para quienes buscan un snack saludable y sin gluten. ",
        starProduct: "Achiras de Sagú rellenas de bocadillo",
        starProductDescription:
          "Achiras: Un viaje culinario a la tradición colombiana sin gluten. Snack de sagú, crujiente y sabroso.",
        brandPersonality: "wise",
        urlInstagram:
          "https://www.instagram.com/asoemaf_achiras?igsh=MWtraHE3enJxeTV4OQ==",
        _id: "66512bf6e5d04f5961743389",
        __v: 0,
      },
      responseAi: {
        message:
          "\n¡Bienvenidos a Achiras del Sagú, donde cada bocado es un paseo por los exuberantes paisajes colombianos!\n    Soy Lucía Pardo, una líder apasionada con más de tres décadas de experiencia en el arte culinario, y estoy aquí para llevarlos en un viaje gastronómico único. En Achiras del Sagú, fusionamos tradición e innovación para ofrecer experiencias inigualables con productos de sagú, un ingrediente emblemático de nuestra tierra.\n    Nuestros productos artesanales son mucho más que simples snacks: son el reflejo de nuestra pasión por la calidad y el compromiso con el empoderamiento de las mujeres. Cada achira representa una oportunidad de crecimiento para nuestras comunidades, demostrando que la excelencia y la inclusión van de la mano.\n    ¿Qué hace a nuestras Achiras tan especiales? No solo son saludables y libres de gluten, sino que también son un homenaje a la diversidad gastronómica de Colombia. Desde los pintorescos pueblos hasta las vibrantes ciudades, cada mordisco es una celebración de nuestra rica herencia culinaria.\n    ¿Estás listo para unirte a nosotros en este viaje de sabores y texturas? Achiras del Sagú es mucho más que un snack, es un regalo único para disfrutar en cualquier lugar, en cualquier momento.\n    ¡Únete a nuestra comunidad en Instagram en @asoemaf_achiras y sé parte de esta deliciosa aventura!\n\n    Achiras del Sagú: donde la tradición se encuentra con la innovación en cada bocado.\n  ",
      },
    },
  ],
};
