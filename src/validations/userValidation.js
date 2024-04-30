// Función para validar el correo electrónico
export function validateEmail(email) {
    if (!email || typeof email !== 'string') return false;
    return email.includes('@');
  }
  
  // Función para validar los datos del usuario
  export function validateUser(user) {
    const { id, name, email, password } = user;
    if (typeof id !== 'number' || typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      return false;
    }
    if (!validateEmail(email)) {
      return false;
    }
    if (password.length < 8 || password.length > 20) {
      return false;
    }
    return true;
  }
  