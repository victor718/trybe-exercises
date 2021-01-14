function backgoundColor() {
    let getSection = document.querySelector('.text-model');
    let getBtn = document.querySelector('#btn-backCor')
    let getInput = document.querySelector('#back-color');
    getBtn.addEventListener('click', function () {
        let color = getInput.value;
        getSection.style.backgroundColor = color;
    })
}

function colorFont() {
    let getParagrafo = document.querySelector('#text-edit');
    let getInput = document.querySelector('#font-color');
    let getBtn = document.querySelector('#btn-fontCor');
    getBtn.addEventListener('click', function () {
        let color = getInput.value;
        getParagrafo.style.color = color;
    })
}

function tamFonte() {
    let getInput = document.querySelector('#input-font-tam');
    let getBtn = document.querySelector('#btn-fonteSize');
    let getText = document.querySelector('#text-edit');
    let tamanho = 0;
    getBtn.addEventListener('click', function () {
        tamanho = parseInt(getInput.value, 0) + 'px';
        getText.style.fontSize = tamanho;
    })
}

function fontFamily() {
    let getSelect = document.querySelector('.select-itens');
    // console.log(getSelect.value)
    let getBtn = document.querySelector('#btn-fontFamily');
    let getText = document.querySelector('#text-edit');
    getBtn.addEventListener('click', function () {
        getText.style.fontFamily = getSelect.value;
    })
}

function spaceLine() {
    let getText = document.querySelector('#text-edit');
    let getBtn = document.querySelector('#btn-espaceLine');
    let getInput = document.querySelector('#input-space');
    getBtn.addEventListener('click', function () {
        getText.style.lineHeight = getInput.value + 'em';
    })
}

function createObj() {
    let getBackground = document.querySelector('.text-model');
    let getStyleText = document.getElementById('text-edit');
    let save = {
        'backColor': getBackground.style.backgroundColor,
        'fontColor': getStyleText.style.color,
        'sizeFont': getStyleText.style.fontSize,
        'familyFont': getStyleText.style.fontFamily,
        'spaceLine': getStyleText.style.lineHeight
    }
    return save;
}

function save() {
    let getBtn = document.querySelector('#salvar');
    getBtn.addEventListener('click', function () {
        let date = createObj();
        for (let key in date) {
            localStorage.setItem(key, date[key])
        }
    })
}

function main() {
    backgoundColor();
    colorFont();
    tamFonte();
    fontFamily();
    spaceLine();
    save();
}
main();

function setStyle(key, value) {
    let getTexto = document.getElementById('text-edit');
    let getSection =  document.querySelector('.text-model');
    if (key === 'backColor'){
        getSection.style.backgroundColor = value;
    }
    if (key === 'fontColor'){
        getTexto.style.color = value;
    }
    if (key === 'sizeFont'){
        getTexto.style.fontSize = value;
    }
    if (key === 'familyFont'){
        getTexto.style.fontFamily = value;
    }
    if (key === 'spaceLine'){
        getTexto.style.lineHeight = value;
    }
}


window.onload = function() {
    if(localStorage.length > 0){
        for(let i = 0; i < localStorage.length; i += 1){
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            setStyle(key, value);
        }
    }else {
        alert('NENHUMA CONFIGURAÇÃO SALVA!!')
    }
}
