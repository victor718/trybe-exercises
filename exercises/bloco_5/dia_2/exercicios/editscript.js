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

function main() {
    edit1();
    edit2();
    edit3();
}

main();