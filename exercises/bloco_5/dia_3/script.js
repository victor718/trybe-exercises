function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

// createDaysOfTheWeek();


function criaElemento(elmento, name = '', value = '') {
    let el = document.createElement(elmento);
    if (value !== '' && name !== '') {
        el.setAttribute(name, value);
    }
    return el;
}

function classHoliday(element, day) {
    if (day === 24 || day === 25 || day === 31) {
        element.className += ' holiday'
    }
    return element;
}

function classFriday(element, day) {
    if (day === 4 || day === 11 || day === 18 || day === 25){
        element.className += ' friday';
    }
    return element
}

function createDays() {
    let ulDays = document.getElementById('days');
    let li = '';
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let i = 0; i < dezDaysList.length; i += 1) {
        li = criaElemento('li', 'class', 'day');
        li = classHoliday(li, dezDaysList[i]);
        li = classFriday(li, dezDaysList[i]);

        li.innerText = dezDaysList[i];
        ulDays.appendChild(li);
    }
}


function createBtnHoliday(feriados) {
    let divButtonsContainer = document.querySelector('.buttons-container');
    let btn = criaElemento('button', 'id', 'btn-holiday');
    btn.innerText = feriados;
    divButtonsContainer.appendChild(btn);
}

function alteraCor(color, element) {
    for (let i = 0; i < element.length; i += 1) {
        element[i].style.backgroundColor = color;
    }
}

function eventHoliday() {
    let btn = document.getElementById('btn-holiday');
    let days = document.getElementsByClassName('holiday');
    let holiday = false;
    btn.addEventListener('click', function() {
        if(holiday === false){
            alteraCor('white', days);
            holiday = true;
        }else{
            alteraCor('#eee', days);
            holiday = false;
        }
    });
}

function createBtnFriday(sexta) {
    let newBtn = criaElemento('button', 'id', 'btn-friday');
    let getBtn = document.querySelector('.buttons-container');
    newBtn.innerText = sexta;
    getBtn.appendChild(newBtn); 
}

function alteraText(element, tipo) {
    let dias = [4, 11, 18, 25];
    let sextou = 'SEXTOU o/!';
    for (let i = 0; i < element.length; i += 1) {
        element[i].innerText = tipo === 1 ? dias[i] : sextou;
    }
}

function eventFriday() {
    let getBtn = document.getElementById('btn-friday');
    let days = document.getElementsByClassName('friday');
    let friday = false;
    getBtn.addEventListener('click', function(event) {
        console.log(event)
        if(friday === false) {
            alteraText(days, 1);
            friday = true;
        }else {
            alteraText(days, 0);
            friday = false;
        }
    });
}



function eventZoom() {
    let getDay = document.getElementsByClassName('day');
    for (let i = 0; i < getDay.length; i += 1) {
        getDay[i].addEventListener('mouseover', function(event) {
            event.target.style.transform = 'scale(1.4)';
        })
        getDay[i].addEventListener('mouseout', function(event){
            event.target.style.transform = 'none';
        })
    }
}

function criaTarefa(tarefa) {
    let newSpan = criaElemento('span');
    let getDiv = document.querySelector('.my-tasks');
    newSpan.innerText = tarefa;
    getDiv.appendChild(newSpan);
}

function addLegend(cor) {
    let newDiv = criaElemento('div', 'class', 'task');
    let getMyTasks = document.querySelector('.my-tasks');
    newDiv.style.backgroundColor = cor;
    getMyTasks.appendChild(newDiv);
}

 
function main() {
    createDaysOfTheWeek();
    createDays();
    createBtnHoliday('Feriados');
    eventHoliday();
    createBtnFriday('Sexta-feira');
    eventFriday();
    eventZoom();
    criaTarefa('Projeto');
    addLegend('red');
}

main();