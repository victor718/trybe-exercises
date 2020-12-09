const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.equal(50, 50); // Sem erros: 50 == 50
// assert.equal(50, 70); // AssertionError: 50 == 70


function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.equal(expected, 3, 'Nove dividido por três é igual a três');