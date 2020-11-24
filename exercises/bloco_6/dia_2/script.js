function createCheckBoxStates() {
    let states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
    let getSelect = document.querySelector('#idStates');
    let setOption = document.createElement('option');
    setOption.innerText = 'Escolha um estado';
    setOption.value = ''
    getSelect.appendChild(setOption)
    states.forEach((e, index) => {
        let setOption = document.createElement('option');
        setOption.innerText = e;
        setOption.value = e;
        getSelect.appendChild(setOption)
    })
}

function formValidationDate(getDate) {
    let validDate = getDate.replace('-', '/');
    console.log('REPLACE DATA  ' + validDate);
    let data = getDate.split('-')
    let day = data[0];
    let month = data[1]
    let year = data[2]

    //https://pt.stackoverflow.com/questions/21739/como-validar-data-levando-em-conta-ano-bissexto
    //mes com 31 dias
    if ((month == 01) || (month == 03) || (month == 05) || (month == 07) || (month == 08) || (month == 10) || (month == 12)) {
        if ((day < 01) || (day > 31)) {
            return false;
        }
    } else {
        //mes com 30 dias
        if ((month == 04) || (month == 06) || (month == 09) || (month == 11)) {
            if ((day < 01) || (day > 30)) {
                return false;
            }
        } else {
            //February and leap year
            if ((month == 02)) {
                if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
                    if ((day < 01) || (day > 29)) {
                        return false;
                    }
                } else {
                    if ((day < 01) || (day > 28)) {
                        return false;
                    }
                }
            }
        }
    }
    //-------------------------------------------------------------------------------------------------
    if (month > 12 || year > 2020) {
        return false;
    }

    return validDate;
}

//https://gist.github.com/joaohcrangel/8bd48bcc40b9db63bef7201143303937
function isValidCPF(cpf) {
    let validCpf = cpf;
    if ((cpf.length < 14) || (cpf[3] !== '.' || cpf[7] !== '.' || cpf[11] !== '-')) {
        return false;
    }
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) {
        return false
    }
    let soma = 0
    let resto
    for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(cpf.substring(9, 10))) return false
    soma = 0
    for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(cpf.substring(10, 11))) return false
    return validCpf;
}
//-----------------------------------------------------------------------------------------

function mascaraCpf() {
    let getInputCpf = document.getElementById('idCpf');
    getInputCpf.addEventListener('keyup', function (e) {
        let ev = e.target.value.length;

        if (typeof (e.key) === 'string' && isNaN(e.key)) {
            e.target.value = '';
        } else {
            if (ev === 3 || ev === 7) {
                e.target.value += '.';
            }
            if (ev === 11) {
                e.target.value += '-';
            }
        }
    })
}

const reg = el => (el.type === 'text' || el.type === 'select-one' || el.type === 'textarea' || el.type === 'email') || (el.type === 'radio' && el.checked);

const createElement = (tipo, name, value) => {
    let el = document.createElement(tipo);
    el.setAttribute(name, value);
    return el;
}

function clearAll() {
    let getDivName = document.getElementById('isName');
    let getList = document.getElementById('list-info');
    let getInfoJob = document.getElementById('info-job');
    let t = getDivName.childNodes.length + getList.childNodes.length + getInfoJob.childNodes.length;
    let getH1;
    let getLi;
    let getP;
    if (t > 0) {
        getH1 = document.querySelectorAll('#isName h1');
        getH1.forEach(e => getDivName.removeChild(e));

        getLi = document.querySelectorAll('#list-info li');
        getLi.forEach(e => getList.removeChild(e));

        getP = document.querySelectorAll('#info-job p');
        getP.forEach(e => getInfoJob.removeChild(e));
    }
}

function createCv(array) {
    console.log(array);
    let indice = ['E-mail: ', 'CPF: ', 'Endereço: ', 'Cidade: ', 'Estado: ', 'Casa ou apart: ', 'Resumo do currículo', 'Cargo: ', 'Descrição do cargo: ', 'Data de nascimento: '];
    let getDivName = document.getElementById('isName');
    let getList = document.getElementById('list-info');
    let getInfoJob = document.getElementById('info-job');
    let newEl;
    clearAll();
    array.forEach((el, index) => {
        if (index === 0) {
            newEl = createElement('h1', 'class', 'font-weight-bold h2 text-center');
            newEl.innerText = el;
            getDivName.appendChild(newEl);
        } else if (index > 0 && index < 7) {
            newEl = createElement('li', 'class', 'text-left mt-2');
            newEl.innerText = `${indice[index - 1]}${el}`;
            getList.appendChild(newEl);
        }else {
            newEl = createElement('p', 'class', 'mt-3');
            newEl.innerHTML = `${'<strong>'} ${indice[index - 1]} ${'</strong>'} ${'</br>'}${el}`;
            getInfoJob.appendChild(newEl);
        }
    })
}

function isValidate(formDate) {
    formDate.addEventListener('submit', function (event) {
        event.preventDefault()
        let cpf = formDate.yourCpf.value;
        let birth = formDate.yourBirth.value;
        if (!isValidCPF(cpf) || !formValidationDate(birth)) {
            alert('DADOS INVÁLIDOS');
        } else {
            let dates = [];
            for (let el of formDate) {
                console.log(el.type)
                if (reg(el)) dates.push(el.value);
            }
            createCv(dates);
        }
    })
}

(function () {
    const isForm = 'is-validation-form';
    window.addEventListener('load', function () {
        createCheckBoxStates();
        mascaraCpf();
        let forms = document.getElementsByClassName(isForm);
        isValidate(forms[0])

    })
})();


