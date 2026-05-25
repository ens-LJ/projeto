const { validatePassword, validateEmail } = require('../../src/validation');

test('CT03: Senha válida', () => {
  expect(validatePassword('123456', '123456').valid).toBe(true);
});

test('CT03: Senha curta', () => {
  expect(validatePassword('123', '123').valid).toBe(false);
});

test('CT03: Confirmação diferente', () => {
  expect(validatePassword('123456', '654321').valid).toBe(false);
});

test('CT03: E-mail válido e inválido', () => {
  expect(validateEmail('').valid).toBe(false);
  expect(validateEmail('teste').valid).toBe(false);
  expect(validateEmail('teste@email.com').valid).toBe(true);
});
