// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
// Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, 
// use as seguintes referências:

// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salario = 1250.00;
const salario_bruto = salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
let inss_imposto = 0;
let ir_imposto = 0;

if (salario > 5189.82) {
    inss_imposto = 570.88;
} else if (salario >= 2594.93 && salario <= 5189.82) {
    inss_imposto = salario * (11 / 100);
} else if (salario >= 1556.95 && salario <= 2594.92) {
    inss_imposto = salario * (9 / 100);
} else {
    inss_imposto = salario * (8 / 100);
}

salario -= inss_imposto;

if (salario > 4664.68) {
    ir_imposto = (salario * (27.5 / 100)) - 869.36;
    salario -= ir_imposto;

} else if (salario >= 3751.06 && salario <= 4664.68) {
    ir_imposto = (salario * (22.5 / 100)) - 636.13;
    salario -= ir_imposto;

} else if (salario >= 2826.66 && salario <= 3751.05) {
    ir_imposto = (salario * (15 / 100)) - 354.80;
    salario -= ir_imposto;

} else if (salario >= 1903.99 && salario <= 2826.65) {
    ir_imposto = (salario * (7.5 / 100)) - 142.80;
    salario -= ir_imposto;

} else {
    ir_imposto = 0;
}


salario = salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

inss_imposto = inss_imposto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

if (ir_imposto > 0) {
    ir_imposto = ir_imposto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    

    console.log('Seu salário bruto é: ' + salario_bruto);
    console.log('Valores deduzidos: ' + inss_imposto + ' de INSS e ' + ir_imposto + ' de IR');
    console.log('Salário liquido ' + salario);
} else {
    console.log('Seu salário bruto é: ' + salario_bruto);
    console.log('Valor deduzido: ' + inss_imposto + ' de INSS e IR (isento de imposto de renda)');
    console.log('Salário liquido ' + salario);
}