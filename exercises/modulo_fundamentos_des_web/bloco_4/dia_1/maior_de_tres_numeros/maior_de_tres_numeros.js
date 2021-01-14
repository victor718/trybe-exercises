let num1 = Math.floor(Math.random() * 3);

let num2 = Math.floor(Math.random() * 3);

let num3 = Math.floor(Math.random() * 3);

if (num1 > num2 && num1 > num3) {
    console.log('O número ' + num1 + ' é maior que ' + num2 + ' e ' + num3);
}else if (num2 > num1 && num2 > num3) {
    console.log('O número ' + num2 + ' é maior que ' + num1 + ' e ' + num3);
}else if (num3 > num1 && num3 > num2){
    console.log('O número ' + num3 + ' é maior que ' + num1 + ' e ' + num2);
}else {
    console.log('Existe números iguais: ' + num1 + ' | ' + num2 + ' | ' + num3);
}
