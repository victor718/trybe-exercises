// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com
//  5 asteriscos de base. Por exemplo:
// n = 5
// *
// **
// ***
// ****
// *****

let numero_lados = 6;

if (numero_lados > 1) {
    for (let x = 0; x < numero_lados; x += 1) {
        console.log('*'.repeat(x + 1));
    }
}else {
    console.log('Número inválido');
}
