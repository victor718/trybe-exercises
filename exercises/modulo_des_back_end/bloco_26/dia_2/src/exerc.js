// function isNumber(arrayNumber) {
//   let cont = 0;
//   arrayNumber.forEach((el)=> {
//     if (typeof el !== 'number') cont += 1; 
//   });
//   return cont;
// }

// function calcular(...args) {
//   const promise = new Promise((resolve, reject) => {
//     const resultVerify = isNumber(args);
//     let total = 0; 
//     if (resultVerify > 0) reject(Error("Informe apenas número."));
//     if (!resultVerify) {
//       total = ((args[0] + args[1]) * args[2]);
//     } 
//     if (total < 50) reject(Error("Valor muito baixo"));
//     resolve(total);
//   });
//   return promise;
// }

// calcular(Math.floor(Math.random() * 100) , Math.floor(Math.random() * 100) , Math.floor(Math.random() * 100) )
//   .then(result => console.log(`sucesso: ${ result }`))
//   .catch(err => console.log(`erro: ${ err.message }`));


function doMath(...args) {
  return new Promise((resolve, reject) => {

    const paramTypes = args.map((param) => typeof param);
    
    if (paramTypes.some((paramType) => paramType !== "number")) {
      return reject(new Error('Informe apenas números'));
    }
    const result = (a + b) * c;
    if(result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  });
}

