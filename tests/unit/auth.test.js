const { authenticateUser } = require('../../src/auth');

test('CT01: Login com credenciais válidas', () => {
  const db = [{ email: 'joao@email.com', password: '123456' }];
  const result = authenticateUser('joao@email.com', '123456', db);
  expect(result.success).toBe(true);
});

test('CT02: Login com senha incorreta', () => {
  const db = [{ email: 'joao@email.com', password: '123456' }];
  const result = authenticateUser('joao@email.com', 'senha_errada', db);
  expect(result.success).toBe(false);
  expect(result.message).toBe('credenciais inválidas');
});
