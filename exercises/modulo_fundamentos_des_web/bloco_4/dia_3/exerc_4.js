// - Depois, faça uma pirâmide com n asteriscos de base:
// n = 5
//   *
//  ***
// *****

let piramide = 21;
let asteriscos = 1;

if (piramide >= 3 && piramide % 2 != 0) {
    let contador = (piramide - 1) / 2;

    for (let x = 0; x <= contador; x += 1) {
        let aux = ((piramide - 1) / 2) - x ;
        if (x > 0){
            asteriscos += 2;
            console.log(' '.repeat(aux) + '*'.repeat(asteriscos));
        }else {
            console.log(' '.repeat(aux) + '*'.repeat(x + 1));
        }
    }

}else {
    console.log('Número inválido');
}
