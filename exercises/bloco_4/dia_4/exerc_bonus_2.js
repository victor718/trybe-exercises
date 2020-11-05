function add(num1, num2) {
    let tam1 = num1.length;
    let tam2 = num2.length;
    let maior = tam1 >= tam2 ? tam1 : tam2;
    console.log(tam1, tam2)
    let res = '';

    for (let i = 0; i < maior; i += 1){
        if (i < num1.length && i < num2.length ){
            let somaTemp = num1[i] + num2[i];
            res += '' + somaTemp;
        }else if (i < num1.length){
            res += '' + num1[(tam1 - 1) - i];
        }else{
            res += '' + num2[(tam2 - 1) - i];
        }
    }

    return res;
}

console.log(add(15, 19));