const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
}

// implemente seus testes aqui

// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
const myList = [1, 2, 3, 4];
const myListCopy = [1, 2, 3, 4]
const myListExpected = [1, 2, 4];


assert.strictEqual(typeof myRemoveWithoutCopy, 'function');
assert.deepStrictEqual(myRemoveWithoutCopy(myList, 3), myListExpected, 'Retorno esperado lista sem elemento 3.');
assert.notDeepStrictEqual(myRemoveWithoutCopy(myList, 3), myListCopy, `Retorno esperado ${myListExpected}`);

const newList = [5, 6, 7, 8, 9]
myRemoveWithoutCopy(newList, 8)
assert.strictEqual(newList, [5, 6, 7, 8, 9], 'Lista esperada [5, 6, 7, 8, 9]')
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Retorno deve ser [1, 2, 3, 4]');
