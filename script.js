const form = document.getElementById('elevator-form');
const generateBtn = document.getElementById('generate-btn');

form.addEventListener('input', () => {
  const inputs = Array.from(document.querySelectorAll('input, textarea'));
  const isFormValid = inputs.every(input => input.checkValidity());
  generateBtn.disabled = !isFormValid;
});

generateBtn.addEventListener('click', () => {
  const pitchText = generatePitch(); // Función para generar el Elevator Pitch
  localStorage.setItem('pitchText', pitchText);
  window.location.href = 'elevator-pich-generado.html';
});

document.getElementById('elevator-formulario').addEventListener('submit', function(event) {
  var historia = document.getElementById('historia').value;
  var descripcion = document.getElementById('descripcion').value;

  if (historia === '' || descripcion === '') {
      alert('Por favor completa todos los campos obligatorios');
      event.preventDefault(); // Evita que se envíe el formulario si no están completos los campos
  }
});
function generatePitch() {
  // Lógica para generar el Elevator Pitch con los datos del formulario
}

// Lógica para copiar y guardar el texto generado en el archivo elevator-pich-generado.html