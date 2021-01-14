// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function criarObj(arrayNumbers){
    let numbersObj = new Object();
    numbersObj[arrayNumbers[0]] = 0;
 
    for (let x = 1; x < arrayNumbers.length; x += 1){
        for (let key in numbersObj) {
            if(key != x){
                numbersObj[arrayNumbers[x]] = 0;
            }
        }
    }
    return numbersObj;
}

function qualMaior(lista) {
    let maior = 0;
    let maior_Chave = 0
    
    for (let key in lista) {
        if (lista[key] > maior){
            maior = lista[key];
            maior_Chave = key
        }
    }

    return maior_Chave;
}

function verificaRepetido(arrayNumeros) {
    let numObj = criarObj(arrayNumeros);

    for (let x = 0; x < arrayNumeros.length; x += 1){
        for (let key in numObj) {
            if(key == arrayNumeros[x]){
                numObj[arrayNumeros[x]] += 1;
            }
        }
    }
    return numObj;  
}

function main() {
    let numbers = [2, 3, 2, 5, 8, 2, 3];
    let listaNumbers = verificaRepetido(numbers)
    console.log(listaNumbers);
    let maior = qualMaior(listaNumbers);

    console.log(maior);
}

main();
