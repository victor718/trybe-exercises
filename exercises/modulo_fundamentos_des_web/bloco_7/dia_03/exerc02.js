const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const arrayTest = [1, 2, 3, 4];
const arrayEspected = [1, 2, 4];

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove(arrayTest, 3), arrayEspected, 'Retorno esperado [1, 2, 4]');
assert.notDeepStrictEqual(myRemove(arrayTest, 3), arrayTest, `Não retorna o array ${arrayTest}.`);

const newArr = [5, 6, 7, 8, 9];
myRemove(newArr, 5);
assert.deepStrictEqual(newArr, [5, 6, 7, 8, 9], 'Array esperado [5, 6, 7, 8, 9]')
assert.deepStrictEqual(myRemove(arrayTest, 5), arrayTest, 'Array esperao [1, 2, 3, 4]');
