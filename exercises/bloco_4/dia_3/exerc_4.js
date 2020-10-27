// - Depois, faça uma pirâmide com n asteriscos de base:
// n = 5
//   *
//  ***
// *****

let numero_lados = 5;

if (numero_lados > 1) {
    for (let x = 0; x < numero_lados && numero_lados % 2 != 0; x += 1) {
        (x + 1) == 1 ? console.log('  *  ') : x;
        (x + 1) == 3 ? console.log(' *** ') : x;
        (x + 1) == 5 ? console.log('*****') : x;
    }
}else {
    console.log('Número inválido');
}
