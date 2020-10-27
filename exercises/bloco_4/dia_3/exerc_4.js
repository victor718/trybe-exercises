// - Depois, faça uma pirâmide com n asteriscos de base:
// n = 5
//   *
//  ***
// *****

let piramide = 23;
let piramide_pronta = null;
let asteriscos = 1;

if (piramide >= 3 && piramide % 2 != 0) {
    let contador = (piramide - 1) / 2;

    for (let x = 0; x <= contador; x += 1) {
        let aux = ((piramide - 1) / 2) - x ;
        // console.log(`Piramide ${piramide} - 1 / 2 - ${x} = ${aux}`);
        if (x > 0){
            asteriscos += 2;
            console.log(' '.repeat(aux) + '*'.repeat(asteriscos) + ' '.repeat(aux));
        }else {
            console.log(' '.repeat(aux) + '*'.repeat(x + 1) + ' '.repeat(aux));
        }
    }

}else {
    console.log('Número inválido');
}
