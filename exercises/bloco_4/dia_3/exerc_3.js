// Agora inverta o lado do triângulo. Por exemplo:
// n = 5
//     *
//    **
//   ***
//  ****
// *****

let numero_lados = 5;

if (numero_lados > 1) {
    for (let x = 0; x < numero_lados; x += 1) {
        console.log(' '.repeat(4 - x)+'*'.repeat(x + 1));
    }
}else {
    console.log('Número inválido');
}
