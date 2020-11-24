// function testingScope(escopo) {
//     if (escopo === true) {
//         var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//         console.log(ifScope);
//     } else {
//         var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = (escopo) => {
    let ifScope;
    let elseScope;
  if (escopo === true) {
    ifScope = `Não devo ser utilizada fora do meu escopo (if) ótimo, ui utilizada no escopo ! 
    Não devo ser utilizada fora meu escopo (else)`;
    console.log(ifScope);
  } else {
    elseScope = `Não devo ser utilizada fora meu escopo (else)
    Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);