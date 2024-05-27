document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('elevator-form');
  const generateBtn = document.getElementById('generate-btn');
  const elevatorPitchOutput = document.getElementById('elevatorPitchOutput');
  const imageButtons = document.querySelectorAll(
    "#image-buttons .image-button"
  );
  const requiredFields = [
    "emprendedora",
    "historia",
    "nombre-marca",
    "que-vende",
    "como-hace",
    "por-quienes",
    "producto-estrella",
  ];

  // Función para validar los campos obligatorios
  function validateForm() {
    let isValid = true;
    requiredFields.forEach((field) => {
      const inputField = form.elements[field];
      if (inputField.value.trim() === "") {
        isValid = false;
      }
      if (inputField.value.trim() !== "") {
        inputField.classList.add("filled");
      } else {
        inputField.classList.remove("filled");
      }
    });
    return isValid;
  }


  // Función para generar el elevator pitch
  function generateElevatorPitch() {
    const emprendedora = form.elements["emprendedora"].value;
    const historia = form.elements["historia"].value;
    const nombreMarca = form.elements["nombre-marca"].value;
    const queVende = form.elements["que-vende"].value;
    const comoHace = form.elements["como-hace"].value;
    const porQuienes = form.elements["por-quienes"].value;
    const productoEstrella = form.elements["producto-estrella"].value;
    const descripcionEstrella = form.elements["descripcion-estrella"].value;

    const obj = {
      UserEntreprenuer: emprendedora,
      story: historia,
      brandName: nombreMarca,
      whatSell: queVende,
      audienceTarget:
        "Nuestras Achiras son ideales para quienes buscan un snack saludable y sin gluten. ",
      starProduct: productoEstrella,
      starProductDescription: descripcionEstrella,
      brandPersonality: "wise",
    };

     // const selectedImage = document.querySelector(
    //   "#image-buttons .selected img"
    // ).alt;
    const selectedImage = "Heroica";

    // const elevatorPitch = `¡Hola! Soy ${emprendedora}, y quiero compartirte la historia de ${historia}. En mi marca ${nombreMarca}, me dedico a vender ${queVende} de una forma única: ${comoHace}. Mis productos son amados por ${porQuienes}, especialmente mi estrella, ${productoEstrella}. La personalidad de mi marca se representa con la imagen: ${selectedImage}. ¡Conoce más sobre mi emprendimiento!`;

    // Mostrar el elevator pitch en el elemento HTML
    elevatorPitchOutput.textContent = elevatorPitch;
    sessionStorage.setItem("pitch", elevatorPitch);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj),
    }).then((res) => {
      sessionStorage.setItem("pitch", JSON.stringify(res.json()));
      window.location.href = "/elevator-pitch-generado.html";
    });

   const mockResponse = {
      responseAi: {
        message:
          "\n    ¡Bienvenidos a Achiras del Sagú, donde cada bocado es un paseo por los exuberantes paisajes colombianos!\n    Soy Lucía Pardo, una líder apasionada con más de tres décadas de experiencia en el arte culinario, y estoy aquí para llevarlos en un viaje gastronómico único. En Achiras del Sagú, fusionamos tradición e innovación para ofrecer experiencias inigualables con productos de sagú, un ingrediente emblemático de nuestra tierra.\n    Nuestros productos artesanales son mucho más que simples snacks: son el reflejo de nuestra pasión por la calidad y el compromiso con el empoderamiento de las mujeres. Cada achira representa una oportunidad de crecimiento para nuestras comunidades, demostrando que la excelencia y la inclusión van de la mano.\n    ¿Qué hace a nuestras Achiras tan especiales? No solo son saludables y libres de gluten, sino que también son un homenaje a la diversidad gastronómica de Colombia. Desde los pintorescos pueblos hasta las vibrantes ciudades, cada mordisco es una celebración de nuestra rica herencia culinaria.\n    ¿Estás listo para unirte a nosotros en este viaje de sabores y texturas? Achiras del Sagú es mucho más que un snack, es un regalo único para disfrutar en cualquier lugar, en cualquier momento.\n    ¡Únete a nuestra comunidad en Instagram en @asoemaf_achiras y sé parte de esta deliciosa aventura!\n\n    Achiras del Sagú: donde la tradición se encuentra con la innovación en cada bocado.\n  ",
      },
    };

    sessionStorage.setItem("pitch", mockResponse.responseAi.message);
  }

  function selectImage(event) {
    // Aclarar ligeramente todas las imágenes y mantenerlas con opacidad
    imageButtons.forEach((button) => {
      if (button !== event.currentTarget) {
        button.style.opacity = 0.7;
      }
    });

    // Seleccionar la imagen clickeada y mantenerla con opacidad completa
    event.currentTarget.style.opacity = 1;
  }
  imageButtons.forEach((button) => {
    button.addEventListener("click", selectImage);
  });

  // Habilitar/deshabilitar el botón de generar según la validación del formulario
  function toggleGenerateBtn() {
    generateBtn.disabled = !validateForm();
  }

  // Event listener para el cambio en los campos del formulario
  form.addEventListener("input", toggleGenerateBtn);

  // Event listener para el envío del formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("test");
    if (validateForm()) {
      generateElevatorPitch();
      // Aquí puedes redirigir al otro HTML con el texto generado y los botones "Copiar" y "Guardar"
    }
  });

  // Inicialmente desactivar el botón de generar
  toggleGenerateBtn();
});
