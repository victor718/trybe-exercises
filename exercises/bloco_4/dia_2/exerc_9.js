// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos 
// elementos por 2.


let numeros = [];
let aux = 0;
const indice = 25;

for (let x = 0; x < indice; x++) {
    numeros[x] = x + 1;
    aux = numeros[x] / 2;

    console.log(numeros[x] + ' / 2 = ' + aux);
} 

console.log(numeros);