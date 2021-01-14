// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é 
// o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: "trybe" e "be"
// Valor esperado no retorno da função: true
// verificaFimPalavra("trybe", "be");
// Retorno esperado: true
// verificaFimPalavra("joaofernando", "fernan");
// Retorno esperado: false

function verificaFimPalavra (word, ending) {
    let final = word.length - ending.length;
    let cont = 0;
    if (word.length < ending.length) {
        return false;
    }
    
    for (let i = 0; i < ending.length; i += 1) {
        if(word[i+final] !== ending[i]) {
            return false;
        }
    }
    return true;
}

console.log(verificaFimPalavra('joaofernando', 'fernan'));


