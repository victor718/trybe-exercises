const obj_reg = {
  'a': '1',
  'e': '2',
  'i': '3',
  'o': '4',
  'u': '5',
};

function encode(word) {
  let result = '';
  for (let k of word) {
    if (obj_reg.hasOwnProperty(k)) {
      result += obj_reg[k];
    } else {
      result += k;
    } 
  }
  return result;
}
encode('Victor Felipe Oliveira Rosa!');

function decode(word) {
  let result = '';
  const keys = Object.keys(obj_reg);
  const values = Object.values(obj_reg);
  for (let k of word) {
    if (values.includes(k)) {
      const index = values.indexOf(k);
      result += keys[index];
    } else {
      result += k;
    }
  }
  return result;
}

module.exports = {
  encode,
  decode
};