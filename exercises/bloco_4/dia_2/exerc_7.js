// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers[2];

for (let x = 0; x < numbers.length; x++){
    menor = numbers[x] < menor ? menor = numbers[x] : menor;
}

console.log(menor);
