const longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu"; // retorna 'aconteceu'

const maiorPalavra = longestWord.split(' ');
const palavrasMaior = (arrPalavras) => {
    let maior = 0;
    let palavra = '';
    for (let index = 0; index < arrPalavras.length; index += 1) {
        for (let l = 1; l < arrPalavras.length; l += 1){
            if (arrPalavras[index].length > arrPalavras[l].length){
                maior = arrPalavras[index].length;
                palavra = arrPalavras[index];
            }
        }
    }
    return palavra;
}

console.log(palavrasMaior(maiorPalavra));