// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function maiorValor(arrayNumbers){
    let aux = 0;

    for (let x = 0; x < arrayNumbers.length; x += 1) {
        aux = arrayNumbers[x] > aux ? x : aux;
    }

    return aux;
}

function exibir (){
    let numbers = [2, 3, 6, 7, 10, 1];
    console.log(maiorValor(numbers));
}

exibir();

