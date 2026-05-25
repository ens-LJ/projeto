function isEmailUnique(email, existingUsers) {
  return !existingUsers.some(user => user.email === email);
}

function canAccessList(isAuthenticated) {
  return isAuthenticated === true;
}

async function fetchList(isAuthenticated, mockApiCall) {
  if (!canAccessList(isAuthenticated)) {
    return { error: "Acesso negado - usuário não autenticado" };
  }
  const data = await mockApiCall();
  if (data.length === 0) {
    return { message: "Nenhum dado encontrado", data: [] };
  }
  return { data };
}

module.exports = { isEmailUnique, canAccessList, fetchList };
