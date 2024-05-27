//// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("campaignForm");
//   const generateButton = document.getElementById("generateButton");

//   // Función para verificar la validez del formulario y cambiar el estado del botón
//   function checkFormValidity() {
//     const isFormValid = form.checkValidity();
//     generateButton.disabled = !isFormValid;
//     generateButton.classList.toggle("enabled", isFormValid);
//   }

//   // Verificar la validez del formulario en la carga inicial
//   checkFormValidity();

//   // Añadir eventos de entrada a todos los campos del formulario
//   form.addEventListener("input", checkFormValidity);

//   //  evento de clic al botón "Generar"
//   generateButton.addEventListener("click", function () {
//     if (form.checkValidity()) {
//       form.reset(); // Limpiar todos los campos del formulario
//       generateButton.disabled = true; // Deshabilitar el botón después de limpiar el formulario
//       generateButton.classList.remove("enabled"); // Quitar clase habilitada
//     }
//   });
// });

const data = sessionStorage.getItem("pitch");

console.log(data);
