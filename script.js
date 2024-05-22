document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('elevator-form');
  const generateBtn = document.getElementById('generate-btn');
  const elevatorPitchOutput = document.getElementById('elevatorPitchOutput');
  const imageButtons = document.querySelectorAll('#image-buttons .image-button');

  const requiredFields = ['emprendedora', 'historia', 'nombre-marca', 'que-vende', 'como-hace', 'por-quienes', 'producto-estrella'];

  // Función para validar los campos obligatorios
  function validateForm() {
      let isValid = true;
      requiredFields.forEach(field => {
          const inputField = form.elements[field];
          if (inputField.value.trim() === '') {
              isValid = false;
          }
          if (inputField.value.trim() !== '') {
              inputField.classList.add('filled');
          } else {
              inputField.classList.remove('filled');
          }
      });
      return isValid;
  }

  // Función para generar el elevator pitch
  function generateElevatorPitch() {
      const emprendedora = form.elements['emprendedora'].value;
      const historia = form.elements['historia'].value;
      const nombreMarca = form.elements['nombre-marca'].value;
      const queVende = form.elements['que-vende'].value;
      const comoHace = form.elements['como-hace'].value;
      const porQuienes = form.elements['por-quienes'].value;
      const productoEstrella = form.elements['producto-estrella'].value;

      const selectedImage = document.querySelector('#image-buttons .selected img').alt;

      const elevatorPitch = `¡Hola! Soy ${emprendedora}, y quiero compartirte la historia de ${historia}. En mi marca ${nombreMarca}, me dedico a vender ${queVende} de una forma única: ${comoHace}. Mis productos son amados por ${porQuienes}, especialmente mi estrella, ${productoEstrella}. La personalidad de mi marca se representa con la imagen: ${selectedImage}. ¡Conoce más sobre mi emprendimiento!`;

      // Mostrar el elevator pitch en el elemento HTML
      elevatorPitchOutput.textContent = elevatorPitch;
  }

  function selectImage(event) {
    // Aclarar ligeramente todas las imágenes y mantenerlas con opacidad
    imageButtons.forEach(button => {
        if (button !== event.currentTarget) {
            button.style.opacity = 0.7;
        }
    });
    
    // Seleccionar la imagen clickeada y mantenerla con opacidad completa
    event.currentTarget.style.opacity = 1;
}
  imageButtons.forEach(button => {
      button.addEventListener('click', selectImage);
  });

  // Habilitar/deshabilitar el botón de generar según la validación del formulario
  function toggleGenerateBtn() {
      generateBtn.disabled = !validateForm();
  }

  // Event listener para el cambio en los campos del formulario
  form.addEventListener('input', toggleGenerateBtn);

  // Event listener para el envío del formulario
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
          generateElevatorPitch();
          // Aquí puedes redirigir al otro HTML con el texto generado y los botones "Copiar" y "Guardar"
      }
  });

  // Inicialmente desactivar el botón de generar
  toggleGenerateBtn();
});