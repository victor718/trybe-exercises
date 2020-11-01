// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, 
// a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, 
// vai precisar de fazer uma checagem a cada iteração e armazenar os
//  resultados em algum lugar.


const num1 = 234

if (num1 > 0) {
    
    let flag = 1;

    for (let x = 1; x < num1; x += 1) {
        if (num1 % x == 0) {
            flag += 1;
        }
    }
    
    if (flag > 1){
        console.log(`O número ${num1} não é número primo.`);
    }else {
        console.log(`O número ${num1} é um número primo.`);
    }

}else {
    console.log('Número informado é 0:');
}