// Use a variável parameter como parâmetro da função abaixo, 
// escreva testes para verificar se a mesma está retornando como se vê na variável result e, 
// caso não esteja, altere o código para que ele passe nos testes.
const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      
      results += i;
    } else {
      results += word[i];
    }
  }
  return results;
};

const parameter = 'Dayane';
const newPalv = removeVowels(parameter);
const result = 'D1y2n3';
console.log(newPalv)