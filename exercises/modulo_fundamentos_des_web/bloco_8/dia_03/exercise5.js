const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];


// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA(names) {
  // escreva seu código aqui
  const repeatAa = names.reduce((ac, value) => {
    let contador = 0;
    for (let index = 0; index < value.length; index++){
      if (value[index] === 'A' || value[index] === 'a'){
        contador += 1;
      }
    }
    return ac += contador;
  }, 0);
  return repeatAa;
}

assert.deepStrictEqual(containsA(names), 20);