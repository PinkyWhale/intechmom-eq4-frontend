document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('elevator-form');
  const generateBtn = document.getElementById('generate-btn');
  const saveButton = document.getElementById('saveButton'); // Nuevo - Botón de guardar
  const elevatorPitchOutput = document.getElementById('elevatorPitchOutput');
  const imageButtons = document.querySelectorAll("#image-buttons .image-button");
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

  // Función para generar el elevator pitch
  function generateElevatorPitch() {
    showGeneratingOverlay();
    saveButton.disabled = true;

    const formData = new FormData(form);
    
    fetch('url-del-backend', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Redirigir al otro HTML con el texto generado
        window.location.href = `resultado.html?texto=${data.textoGenerado}`;
    })
    .catch(error => {
        console.error('Error al enviar formulario al backend:', error);
        hideGeneratingOverlay(); // Ocultar el overlay en caso de error
        saveButton.disabled = false; // Habilitar nuevamente el botón de guardar
    });
  }

  // Habilitar/deshabilitar el botón de generar según la validación del formulario
  function toggleGenerateBtn() {
    generateBtn.disabled = !validateForm();
  }

  // Event listener para el cambio en los campos del formulario
  form.addEventListener("input", toggleGenerateBtn);

  // Event listener para el envío del formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      generateElevatorPitch();
      // Aquí puedes redirigir al otro HTML con el texto generado y los botones "Copiar" y "Guardar"
    }
  });

  function generateElevatorPitch() {
    showGeneratingOverlay();

    // Simular la operación de guardado con un retardo de 2 segundos
    setTimeout(function() {
      hideGeneratingOverlay();
    }, 3000);
  }

  function showGeneratingOverlay() {
    document.getElementById('generating-overlay').style.display = 'flex';
  }

  function hideGeneratingOverlay() {
    document.getElementById('generating-overlay').style.display = 'none';
  }

  saveButton.addEventListener('click', function() {
    if (validateForm()) {
      generateElevatorPitch();
    }
  });

});


 