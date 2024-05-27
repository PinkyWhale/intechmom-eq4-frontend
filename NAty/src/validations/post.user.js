function validateUser(user) {
  if (!user || typeof user !== "object") {
    return false; // El objeto de usuario es requerido y debe ser un objeto
  }
  if (!user.name || typeof user.name !== "string") {
    return false; // El nombre es requerido y debe ser una cadena
  }
  return true;
}

function validateEmail(email) {
  // Utiliza una expresión regular o una biblioteca de validación de correo electrónico
  // para verificar si el correo electrónico es válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = { validateUser, validateEmail };
