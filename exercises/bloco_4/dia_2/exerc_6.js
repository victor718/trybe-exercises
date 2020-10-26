// Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let i = 0; i < numbers.length; i++) {
    impar += numbers[i] % 2 != 0 ? 1 : 0;
}

if (impar > 0) {
    console.log('Total de números impares: ' + impar);
} else {
    console.log('Nenhum valor ímpar encontrado:');
}

