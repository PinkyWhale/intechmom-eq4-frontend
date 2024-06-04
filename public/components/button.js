
/// Habilitar botones de   bloqueo  y desbloqueo
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('campaignForm');
  const generateButton = document.getElementById('generateButton');

  // Función para verificar la validez del formulario y cambiar el estado del botón
  function checkFormValidity() {
    const isFormValid = form.checkValidity();
    generateButton.disabled = !isFormValid;
    generateButton.classList.toggle('enabled', isFormValid);
  }

  // Verificar la validez del formulario en la carga inicial
  checkFormValidity();

  // Añadir eventos de entrada a todos los campos del formulario
  form.addEventListener('input', checkFormValidity);

  // Añadir evento de clic al botón "Generar"
  generateButton.addEventListener('click', function() {
    if (form.checkValidity()) {
      form.reset(); // Limpiar todos los campos del formulario
      generateButton.disabled = true; // Deshabilitar el botón después de limpiar el formulario
      generateButton.classList.remove('enabled'); // Quitar clase habilitada
    }
  });
});
//  CONEXION DE NUESTRO SERVIDOR LOCALES 
document.getElementById("campaignForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let campaigDate = {
      nombre: document.getElementById("campaignName").value,
      publc: document.getElementById("reason").value,
      location: document.getElementById("location").value,
      socialMedia: document.getElementById("socialMedia").value,
      contentType: document.getElementById("contentType").value,
    };
    let jsonDatos = JSON.stringify(campaigDate);
    // ruta de server local
    fetch("http://127.0.0.1:3000/api/campaign", {
      method: "POST",
      headers: {
        // averriguar si debe ser nombrado
        "Content-Type": "application/json", 

      },
      body: jsonDatos,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  });

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(obj),
  }).then((res) => {
    sessionStorage.setItem("pitch", JSON.stringify(res.json()));
    window.location.href = "storytelling.html";
  });

 const mockResponse = {
    responseAi: {
      message:
        "\n    ¡Bienvenidos a Achiras del Sagú, donde cada bocado es un paseo por los exuberantes paisajes colombianos!\n    Soy Lucía Pardo, una líder apasionada con más de tres décadas de experiencia en el arte culinario, y estoy aquí para llevarlos en un viaje gastronómico único. En Achiras del Sagú, fusionamos tradición e innovación para ofrecer experiencias inigualables con productos de sagú, un ingrediente emblemático de nuestra tierra.\n    Nuestros productos artesanales son mucho más que simples snacks: son el reflejo de nuestra pasión por la calidad y el compromiso con el empoderamiento de las mujeres. Cada achira representa una oportunidad de crecimiento para nuestras comunidades, demostrando que la excelencia y la inclusión van de la mano.\n    ¿Qué hace a nuestras Achiras tan especiales? No solo son saludables y libres de gluten, sino que también son un homenaje a la diversidad gastronómica de Colombia. Desde los pintorescos pueblos hasta las vibrantes ciudades, cada mordisco es una celebración de nuestra rica herencia culinaria.\n    ¿Estás listo para unirte a nosotros en este viaje de sabores y texturas? Achiras del Sagú es mucho más que un snack, es un regalo único para disfrutar en cualquier lugar, en cualquier momento.\n    ¡Únete a nuestra comunidad en Instagram en @asoemaf_achiras y sé parte de esta deliciosa aventura!\n\n    Achiras del Sagú: donde la tradición se encuentra con la innovación en cada bocado.\n  ",
    },
  };

  sessionStorage.setItem("pitch", mockResponse.responseAi.message);

  //mostrar la alerta de guardado con exito
  function mostrarAlerta() {
    const alerta = document.getElementById('alertsave');
    alerta.style.display = 'block';
    setTimeout(() => {
        alerta.style.display = 'none';
    }, 3000); // Ocultar la alerta después de 3 segundos
}
