function authenticateUser(email, password, userDatabase) {
  const user = userDatabase.find(u => u.email === email);
  if (!user) {
    return { success: false, message: "E-mail não cadastrado" };
  }
  if (user.password !== password) {
    return { success: false, message: "credenciais inválidas" };
  }
  return { success: true, message: "Login realizado com sucesso" };
}

module.exports = { authenticateUser };
