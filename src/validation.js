function validatePassword(password, confirmation) {
  if (!password || password.length < 6) {
    return { valid: false, message: "A senha deve ter no mínimo 6 caracteres" };
  }
  if (password !== confirmation) {
    return { valid: false, message: "Confirmação de senha não coincide" };
  }
  return { valid: true };
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return { valid: false, message: "E-mail é obrigatório" };
  }
  if (!emailRegex.test(email)) {
    return { valid: false, message: "E-mail inválido" };
  }
  return { valid: true };
}

function validateRequiredFields(fields, requiredFields) {
  for (let field of requiredFields) {
    if (!fields[field]) {
      return { valid: false, message: `${field} é obrigatório` };
    }
  }
  return { valid: true };
}

module.exports = { validatePassword, validateEmail, validateRequiredFields };
