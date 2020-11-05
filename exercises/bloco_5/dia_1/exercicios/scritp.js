function alteraParagrafo (){
    document.getElementsByTagName('p')[1].innerText = 'Mais novo e Morando em Marte!!';
}

function alteraQuadroTrybe () {
    let fundo = document.getElementsByClassName('main-content');
    fundo[0].style.backgroundColor = 'green';
}

function aletaQuadroRed () {
    let fundo = document.getElementsByClassName('center-content');
    fundo[0].style.backgroundColor = 'white';
}

function corrigeTexto (){
    document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';
}

function uperCase1 () {
    let textP = document.getElementsByTagName('p');
    let a = textP[0].innerText;
    textP[0].innerText = a.toUpperCase();
}

function imprimeConsole () {
    let cont = document.getElementsByTagName('body');
    let texto = '';
    for (let i = 0; i < cont.length; i += 1) {
        texto += cont[i].innerText;
    }
    console.log(texto);
}

function main () {
    uperCase1();
    corrigeTexto();
    aletaQuadroRed();
    alteraQuadroTrybe();
    alteraParagrafo();
    imprimeConsole();
}

main();


