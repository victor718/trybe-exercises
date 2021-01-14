


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
    let data = getDate.value.split('-')
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

    return true
}

//https://gist.github.com/joaohcrangel/8bd48bcc40b9db63bef7201143303937
function isValidCPF(cpf) {
    if (cpf.length < 13) {
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
    return true
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

function formView(el) {
    let dataText = el[0].children;
    let getDiv = document.querySelector('#forms-ok');
    let dataValue = []
    for (let key of dataText) {
        for (let values of key.children) {
            if (values.type !== undefined) {
                if (values.checked) {
                    dataValue.push(values.value);
                }
                if (values.type !== 'radio') {
                    dataValue.push(values.value);
                }
            }
        }
    }
    dataText = el[1].children;
    for (let key of dataText) {
        for (let values of key.children) {
            if (values.type !== undefined && values.type !== 'submit' && values.type !== 'reset') {
                dataValue.push(values.value);
            }
        }
    }
    return dataValue;
}

const overFlowScroll = () => {
    let getP = document.querySelectorAll('.itens');
    let widthP = 0;
    getP.forEach((e, key) => {
        widthP += parseInt(window.getComputedStyle(e).height.slice('px'))
        if (widthP > 1000) {
            getP[7].style.overflowY = 'scroll';
            getP[7].style.maxHeight = `${500}px`
        }
    })
    console.log(getP[7])
}

function thisCV(arrayData) {
    let d = ['Nome: ', 'E-mail: ', 'CPF: ', 'Endereço: ', 'Cidade: ', 'Estado: ', 'Casa ou apartamento: ', 'Resumo do currículo: ', 'Cargo: ', 'Descrição: ', 'Data de nascimento: '];
    let getDiv = document.querySelector('#forms-ok');
    console.log(getDiv)
    console.log(getDiv.childNodes.length)
    if (getDiv.childNodes.length > 0) {
        console.log('OK')
        let getP = document.querySelectorAll('.itens')
        getP.forEach(e => {
            getDiv.removeChild(e);
        })
    }
    if (getDiv.children.length === 0) {
        d.forEach((e, index) => {
            let newP = document.createElement('p');
            newP.innerHTML = `${'<b>'}${e}${'</b>'}${arrayData[index]}`;
            newP.className = 'itens';
            getDiv.appendChild(newP);
        })
    }

}


function validationForm() {
    let getForm = document.getElementsByTagName('form')[0];
    let elem = getForm.elements;
    console.log(elem.length);
    getForm.addEventListener('submit', function (ev) {
        ev.preventDefault()
        if (!formValidationDate(elem['yourBirth']) || !isValidCPF(elem['yourCpf'].value)) {
            alert('DADOS INVÁLIDOS!' + formValidationDate(elem['yourBirth']) + isValidCPF(elem['yourCpf'].value));
        } else {
            let novo = document.getElementsByTagName('form')[0].children;
            let dados = formView(novo);
            thisCV(dados);
            overFlowScroll();
        }

    })
}

window.onload = function () {
    createCheckBoxStates();
    validationForm();
    mascaraCpf();
}
