// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
// Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 1;
let t = '';
for (let x = 0; x <= 7; x += 1) {

    if (x == 1) { t = '   *   \n'; }
    
    if (x == 2) { t += '  * *  \n'; }
    
    if (x == 3) { t += ' *   * \n'; }

    if(x == 4) { t += '*******'; }

}
console.log(t);

