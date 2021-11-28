const texto = require('./problem')
const suma = require('./problem')
const resta = require('./problem')
const multiplicacion = require('./problem')
const division = require('./problem')
//const tablaMultiplicar = require('./problem')
//const potencia = require('./problem')
//const anidada = require('./problem')
//const cerosIzq = require('./problem')

test('content must be text', () => {
  expect(texto(typeof 'value')).toBe('string');
});

test('adds 1 + 2 to equal 3', () => {
  expect(suma(1 + 2)).toBe(3)
});

test('substract 2 - 1 to equal 1', () => {
  expect(resta(2 - 1)).toBe(1)
});

test('multiplication 2 * 2 to equal 4', () => {
  expect(multiplicacion(2 * 2)).toBe(4)
});

test('division 9 / 3 to equal 3', () => {
  expect(division(9 / 3)).toBe(3)
});
/*test('division 9 / 0 to equal null', () => {
  expect(division(9 / 0)).toBeNull()
});*/

