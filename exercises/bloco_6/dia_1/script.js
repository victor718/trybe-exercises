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
        setOption.value = e.toLocaleLowerCase();
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
            alert('invalid date');
        }
    } else {
        //mes com 30 dias
        if ((month == 04) || (month == 06) || (month == 09) || (month == 11)) {
            if ((day < 01) || (day > 30)) {
                alert('invalid date');
            }
        } else {
            //February and leap year
            if ((month == 02)) {
                if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
                    if ((day < 01) || (day > 29)) {
                        alert('invalid date');
                    }
                } else {
                    if ((day < 01) || (day > 28)) {
                        alert('invalid date');
                    }
                }
            }
        }
    }
    //-------------------------------------------------------------------------------------------------
}

function validationForm() {
    let getForm = document.getElementsByTagName('form')[0];
    let elem = getForm.elements;

    console.log(getForm);
    getForm.addEventListener('submit', function (ev) {
        ev.preventDefault()
        console.log(getForm);
        console.log(elem['yourBirth'])
        formValidationDate(elem['yourBirth']);
    })
}

window.onload = function () {
    createCheckBoxStates();
    validationForm();

}