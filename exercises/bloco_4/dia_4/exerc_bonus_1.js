// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. 
// Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, 
// ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

function verifyAlgarismo(r1, r2){
    const algarismos = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }
    let valor = 0;
    let cont = 0;
    for(let key in algarismos){
        if (key === r1){
            valor = algarismos[key];
        }
        let temp = r1 + r2;
        if (key === temp){
            valor = algarismos[key];
            cont = 1;
            break;
        }
    }
    return [cont, valor];
}

function algarismosRomanos(algarismos){
    let soma = 0;
    let aux = algarismos.length;

    for (let i = 0; i < algarismos.length; i += 1){
        let temp1 = algarismos[i];
        let temp2 = i + 1 < aux ? algarismos[i+1] : '0';
        let resTemp = verifyAlgarismo(temp1, temp2);
        if (resTemp[0] === 1){
            i += 1;
        }
        soma += resTemp[1];
    }
    return soma;
}

console.log(algarismosRomanos('MI'))

