async function generateMockResponse() {
  return {
    choices: [
      {
        finish_reason: "stop",
        index: 0,
        message: {
          content: `¡Bienvenidos a Achiras del Sagú, donde cada bocado es un paseo por los exuberantes paisajes colombianos!

          Soy Lucía Pardo, una líder apasionada con más de tres décadas de experiencia en el arte culinario, y estoy aquí para llevarlos en un viaje gastronómico único. En Achiras del Sagú, fusionamos tradición e innovación para ofrecer experiencias inigualables con productos de sagú, un ingrediente emblemático de nuestra tierra.
          
          Nuestros productos artesanales son mucho más que simples snacks: son el reflejo de nuestra pasión por la calidad y el compromiso con el empoderamiento de las mujeres. Cada achira representa una oportunidad de crecimiento para nuestras comunidades, demostrando que la excelencia y la inclusión van de la mano.
          
          ¿Qué hace a nuestras Achiras tan especiales? No solo son saludables y libres de gluten, sino que también son un homenaje a la diversidad gastronómica de Colombia. Desde los pintorescos pueblos hasta las vibrantes ciudades, cada mordisco es una celebración de nuestra rica herencia culinaria.
          
          ¿Estás listo para unirte a nosotros en este viaje de sabores y texturas? Achiras del Sagú es mucho más que un snack, es un regalo único para disfrutar en cualquier lugar, en cualquier momento.
          
          ¡Únete a nuestra comunidad en Instagram en @asoemaf_achiras y sé parte de esta deliciosa aventura!
          
          Achiras del Sagú: donde la tradición se encuentra con la innovación en cada bocado.`,
          role: "assistant",
        },
        logprobs: null,
      },
    ],
    created: 1677664795,
    id: "chatcmpl-7QyqpwdfhqwajicIEznoc6Q47XAyW",
    model: "gpt-3.5-turbo-0613",
    object: "chat.completion",
    usage: {
      completion_tokens: 17,
      prompt_tokens: 57,
      total_tokens: 74,
    },
  };
}

module.exports = generateMockResponse;
