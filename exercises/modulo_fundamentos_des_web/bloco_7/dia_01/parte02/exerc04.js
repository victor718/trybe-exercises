const arraySkills = ['HTML5', 'CSS3', 'JavaScript', 'Python', 'PHP'];

const stringReplace = (aString) => {
    let frase = 'Tryber x aqui';
    let novaPalvra = frase.replace('x', aString);
    return novaPalvra;
}


const concatFrase = (umaPalavra) => {
    let frase = stringReplace(umaPalavra);
    let fraseConcat = `${frase} \nMinhas cinco principais habilidades são:\n`;
    for (let index = 0; index < arraySkills.length; index += 1) {
        fraseConcat += `\t${arraySkills[index]}\n`;
    }
    fraseConcat  += '#goTrybe.'
    return fraseConcat;
}

console.log(concatFrase('Victor'));
