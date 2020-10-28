// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
// Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let piramide = 41;

let piramide_pronta = '';



if (piramide >= 3 && piramide % 2 != 0) {
    let contador = (piramide - 1) / 2;
    
    for (let x = 0; x < contador; x += 1) {
        let aux = ((piramide - 1) / 2) - x ;
        if (x > 0){
            console.log(' '.repeat(aux) + '*' + ' '.repeat(2 * x - 1) + '*');
        } else {
            console.log(' '.repeat(aux) + '*');
        }
    }
}else{
    console.log('Número inválido')
}
console.log('*'.repeat(piramide));
