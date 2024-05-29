const mockGenerateElevatorResponse = (ElevatorPitchConfigs) => ({
  message: `
    ¡Bienvenidos a ${ElevatorPitchConfigs.brandName}, donde cada bocado es un paseo por los exuberantes paisajes colombianos!
    Soy ${ElevatorPitchConfigs.UserEntreprenuer}, una líder apasionada con más de tres décadas de experiencia en el arte culinario, y estoy aquí para llevarlos en un viaje gastronómico único. En ${ElevatorPitchConfigs.brandName}, fusionamos tradición e innovación para ofrecer experiencias inigualables con productos de sagú, un ingrediente emblemático de nuestra tierra.
    Nuestros productos artesanales son mucho más que simples snacks: son el reflejo de nuestra pasión por la calidad y el compromiso con el empoderamiento de las mujeres. Cada achira representa una oportunidad de crecimiento para nuestras comunidades, demostrando que la excelencia y la inclusión van de la mano.
    ¿Qué hace a nuestras ${ElevatorPitchConfigs.starProduct} tan especiales? No solo son saludables y libres de gluten, sino que también son un homenaje a la diversidad gastronómica de Colombia. Desde los pintorescos pueblos hasta las vibrantes ciudades, cada mordisco es una celebración de nuestra rica herencia culinaria.
    ¿Estás listo para unirte a nosotros en este viaje de sabores y texturas? ${ElevatorPitchConfigs.starProduct} es mucho más que un snack, es un regalo único para disfrutar en cualquier lugar, en cualquier momento.
    ¡Únete a nuestra comunidad en Instagram en ${ElevatorPitchConfigs.urlInstagram} y sé parte de esta deliciosa aventura!
    
    ${ElevatorPitchConfigs.starProduct}: donde la tradición se encuentra con la innovación en cada bocado.
  `,
});

module.exports = mockGenerateElevatorResponse;
