// function quantosParams(...args) {
//   console.log('parâmetros:', args)
//   return `Você passou ${args.length} parâmetros para a função.`;
// };

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams("string", null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


const sum = (...args) => {
  // console.log(args.length);
  // console.log(typeof args);
  // console.log(args)
  // console.log(Array.isArray(args))
  // console.log('\n')
  return args.reduce((accumulator, current) => accumulator + current, 0);
};
console.log(sum(4, 7, 8, 9, 60, {'a':'a'}, function(){})); // 88