// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function  maiorNome (arrayNomes){
    let maior = arrayNomes[1];

    for (let x = 0; x < arrayNomes.length; x += 1) {
        maior = arrayNomes[x].length > maior.length ? arrayNomes[x] : maior;
    }

    return maior;
}

function main (){
    let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
    let name = maiorNome(nomes);

    console.log(name);
}

main();