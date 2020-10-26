// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (x = 0; x < numbers.length; x++){
    maior = numbers[x] > maior ? maior = numbers[x] : maior;
}

console.log(maior);
