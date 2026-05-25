const { isEmailUnique, fetchList } = require('../../src/userService');

test('CT04: E-mail já existente', () => {
  const usuarios = [{ email: 'existente@email.com' }];
  expect(isEmailUnique('existente@email.com', usuarios)).toBe(false);
});

test('CT05: Listagem com autenticação', async () => {
  const mockApi = jest.fn().mockResolvedValue([{ id: 1, nome: 'Item' }]);
  const result = await fetchList(true, mockApi);
  expect(result.data).toEqual([{ id: 1, nome: 'Item' }]);
});

test('CT06: Sem autenticação', async () => {
  const mockApi = jest.fn();
  const result = await fetchList(false, mockApi);
  expect(result.error).toBe('Acesso negado - usuário não autenticado');
});
