// const fs = require('fs');

// class DotPath {
//   constructor() {
//     this.nomeDoArquivo = 'src/simpsons.json';
//     this.id = '';
//   }
  
//   lerArquivo() {
//     try {
//       const data = fs.readFileSync(nomeDoArquivo, 'utf-8');
//       return data;
//     } catch(e) {
//       console.error(`Erro ao ler o arquivo: ${e.path}`);
//       return e
//     }
//   }

// }

const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  }).then((simpson) =>{
    return simpson.map(({ id, name }) => `${id} - ${name}` );
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });


