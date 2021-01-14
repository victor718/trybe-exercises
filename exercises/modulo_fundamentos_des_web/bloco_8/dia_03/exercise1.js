const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const newFor = (ac, el) => {
  const newArr = ac;
  el.forEach(e => newArr.push(e))
  return newArr
}

function flatten(arrays) {
  // escreva seu código aqui
  const newArr = arrays.reduce(newFor);
  console.log(newArr)
  return newArr;
}
assert.deepStrictEqual(flatten(arrays), ["1", "2", "3", true, 4, 5, 6]);
