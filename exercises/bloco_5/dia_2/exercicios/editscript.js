function edit1() {
    let h1 = document.querySelector('h1');
    h1.className = 'title';
}

function edit2() {
    let h3 = document.querySelectorAll('h3');
    for (let i of h3) {
        i.className = 'description';
    }
}

function edit3() {
    let leftContent = document.querySelector('.left-content');
    let mainContent = document.querySelector('.main-content');
    mainContent.removeChild(leftContent);
}

function edit4() {
    let rightContent = document.getElementsByClassName('right-content');
    rightContent[0].style.marginRight = 'auto';
}

function edit5() {
    let paiDoCenterContent = document.querySelector('.center-content').parentNode;
    paiDoCenterContent.style.backgroundColor = 'green';
}

function edit6() {
    let liS = document.getElementsByTagName('li');
    let ul = document.getElementsByTagName('ul');
    ul[0].removeChild(liS[9]);
    ul[0].removeChild(liS[8]);
}


function main() {
    edit1();
    edit2();
    edit3();
    edit4();
    edit5();
    edit6();
}

main();