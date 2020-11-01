//  Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, 
//  imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5
// *****
// *****
// *****
// *****
// *****

let numero_lados = 7;

if (numero_lados > 1) {
    for (let x = 0; x < numero_lados; x += 1) {
        console.log('*'.repeat(numero_lados));
    }
}else {
    console.log('Número inválido');
}
