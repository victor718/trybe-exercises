// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function menorValor(arrayNumbers){
    let aux = arrayNumbers[2];

    for (let x = 0; x < arrayNumbers.length; x += 1) {
        aux = arrayNumbers[x] < aux ? x : aux;
    }

    return aux;
}

function exibir (){
    let numbers = [2, 4, 6, 7, 10, 0, -3];
    console.log(menorValor(numbers));
}

exibir();

