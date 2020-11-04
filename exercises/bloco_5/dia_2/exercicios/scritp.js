function criaElemento(elmento, name = '', idClass = '') {
    let el = document.createElement(elmento);
    if (idClass === 'id') {
        el.id = name;
    }
    if (idClass === 'class') {
        el.className = name
    }
    return el;
}

function exercise1() {
    let h1 = criaElemento('h1');
    h1.innerText = 'Exercício 5.2 - JavaScript DOM';
    document.body.appendChild(h1);
}

function exercise2() {
    let div = criaElemento('div', 'main-content', 'class');
    document.body.appendChild(div);
}

function exercise3() {
    let div = criaElemento('div', 'center-content', 'class');
    let divMainContent = document.querySelector('.main-content');
    divMainContent.appendChild(div);
}

function exercise4() {
    let p = criaElemento('p', 'p-center-content', 'id');
    p.innerText = 'append VS appendChild';
    let divCenterContent = document.querySelector('.center-content');
    divCenterContent.appendChild(p);
}

function exercise5() {
    let div = criaElemento('div', 'left-content', 'class');
    let divMainContent = document.querySelector('.main-content');
    divMainContent.appendChild(div);
}

function exercise6() {
    let div = criaElemento('div', 'right-content', 'class');
    let divMainContent = document.querySelector('.main-content');
    divMainContent.appendChild(div);
}

function exercise7() {
    let img = criaElemento('img', 'small-image', 'class');
    img.src = 'https://picsum.photos/200';
    let divLeftContent = document.querySelector('.left-content');
    divLeftContent.appendChild(img);
}

function exercise8() {
    let ul = criaElemento('ul');
    let li = '';
    let valoresExtenso = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
    for (let i = 0; i < valoresExtenso.length; i += 1) {
        li = criaElemento('li');
        li.innerText = valoresExtenso[i];
        ul.appendChild(li);
    }
    let divRightContent = document.querySelector('.right-content');
    divRightContent.appendChild(ul);
}

function exercise9() {
    let divMainContent = document.querySelector('.main-content');
    for (let i = 0; i < 3; i += 1) {
        let h3 = criaElemento('h3');
        h3.innerText = `Número -> ${i + 1}`;
        divMainContent.appendChild(h3);
    }
}

function main() {
    exercise1();
    exercise2();
    exercise3();
    exercise4();
    exercise5();
    exercise6();
    exercise7();
    exercise8();
    exercise9();
}
main();


