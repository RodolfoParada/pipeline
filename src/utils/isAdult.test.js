const { isAdult } = require('./isAdult');

describe('isAdult', () => {
  test('retorna true si edad >= 18', () => {
    expect(isAdult(18)).toBe(true);
    expect(isAdult(30)).toBe(true);
  });

  test('retorna false si edad < 18', () => {
    expect(isAdult(17)).toBe(false);
  });

  test('retorna false si no es número', () => {
    expect(isAdult('18')).toBe(false);
  });
});
