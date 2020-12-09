const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
const actual15 = myFizzBuzz(15)
assert.strictEqual(actual15, 'fizzbuzz', `Esperado é fizzbuzz, actual é ${actual15}`);

const actual9 = myFizzBuzz(9)
assert.strictEqual(actual9, 'fizz', `Esperado é fizz, actual é ${actual9}`);

const actual25 = myFizzBuzz(25);
assert.strictEqual(actual25, 'buzz', `Esperado é buzz, actual é ${actual25}`);

const actual14 = myFizzBuzz(14);
assert.strictEqual(actual14, 14, `Esperado é 14, actual é ${actual14}`);

// implemente seus testes aqui
// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , 
// retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , 
// retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado --- OK
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado --- ok
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado --- ok
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado --- ok
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado --- ok
