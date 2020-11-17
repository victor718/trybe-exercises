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

    return validDate;
}

//https://gist.github.com/joaohcrangel/8bd48bcc40b9db63bef7201143303937
function isValidCPF(cpf) {
    let validCpf = cpf;
    if ((cpf.length < 13) || (cpf[3] !== '.' || cpf[7] !== '.' || cpf[11] !== '.')) {
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

const reg = el => (el.type === 'text' || el.type === 'select-one' || el.type === 'textarea') || (el.type === 'radio' && el.checked);

function isValidate(formDate) {
    formDate.addEventListener('submit', function (event) {
        event.preventDefault()
        let cpf = formDate.yourCpf.value;
        console.log(cpf);
        let arrayDateValid = [];
        for(let el of formDate) {
            
            if(isValidCPF(cpf)){

            }
        }
    })
}

(function () {
    const isForm = 'is-validation-form';
    window.addEventListener('load', function () {
        createCheckBoxStates();
        mascaraCpf();
        let forms = document.getElementsByClassName(isForm);
        isValidate(forms[0]);
        // console.log('-----------------------------------')
        // console.log(forms[0].idCpf)
        // console.log('-----------------------------------')

    })
})();


