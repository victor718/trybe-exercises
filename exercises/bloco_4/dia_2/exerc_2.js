// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let x = 0; x < numbers.length; x++) {
    soma += numbers[x];
}

console.log(soma);
