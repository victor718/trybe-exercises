// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome("arara");
// Retorno esperado: true
// verificaPalindrome("desenvolvimento");
// Retorno esperado: false


function verificaPalindrome(palavra) {
    let palavraFormat = palavra.toLowerCase().replace(/[^a-zA-Zs]/g, "");
    let inverso = palavraFormat.split('').reverse().join('');

    let resultado = palavraFormat === inverso ? 'É um palíndromo':'Não é um palíndromo';

    console.log(resultado);
}

verificaPalindrome('Socorram-me, subi no ônibus em Marrocos ');
