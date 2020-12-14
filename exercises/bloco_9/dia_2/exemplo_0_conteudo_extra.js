// //Promisse
// function falarDepoisDe(segundos, frase) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(frase, 'abc')
//     }, segundos * 1000);
//   });
// }

// falarDepoisDe(3, 'Que legal')
//   .then((frase, abc) => frase.concat('?!?'))
//   .then(outraFrase => console.log(outraFrase))
//   .catch(e =>  console.log(e))

// Usando callback aninhadas
const http = require('http');
const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  http.get(url, res => {
    let resultado = '';

    res.on('data', dados => {
      resultado += dados;
    });

    res.on('end', () => {
      callback(JSON.parse(resultado));
    });
  });
};

let nomes = [];
getTurma('A',alunos => {
  console.log(alunos);
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
  getTurma('B', alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${b.nome}`));
    getTurma('C', alunos => {
      nomes = nomes.concat(alunos.map(a =>  `C: ${b.nome}`))
    })
  })
})