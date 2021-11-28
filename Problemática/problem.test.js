const functions = require('./problem')


test('content must be text', () => {
  console.log("------", functions.texto)
  expect(functions.texto(typeof 'value')).toBe('string');
});

test('adds 1 + 2 to equal 3', () => {
  expect(functions.suma(1, 2)).toBe(3)
});

test('substract 2 - 1 to equal 1', () => {
  expect(functions.resta(2, 1)).toBe(1)
});

test('multiplication 2 * 2 to equal 4', () => {
  expect(functions.multiplicacion(2, 2)).toBe(4)
});

test('division 9 / 3 to equal 3', () => {
  expect(functions.division(9, 3)).toBe(3)
});
test('division 9 / 0 to equal error', () => {
  expect(functions.division(9, 0)).toBe('No se puede dividir por 0')
});

test('multiplication table of number 2', () => {
  const expected = [2, 4, 6, 8]
  expect(functions.tablaMultiplicar(2, 8)).toEqual(expect.arrayContaining(expected))
});
test('multiplication table of number 2', () => {
  const expected = [2, 4, 6, 8, 10]
  expect(functions.tablaMultiplicar(2)).toEqual(expect.arrayContaining(expected))
});

test('potency of 3 to 3 equal to 9', () => {
  expect(functions.potencia(3, 3)).toBe(27)
});

test('the result of the sum of the squares of 2, is equal to 8', () => {
  expect(functions.anidada(2, 2)).toBe(8)
});

test('add a 0 to the left', () => {
  expect(functions.cerosIzq(3, 2)).toBe('03')
});

