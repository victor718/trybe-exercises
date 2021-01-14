const arr = (array) => {
  if (array.length < 10) {
    let number = (Math.random() * 70).toFixed();
    number *= 22;
    array.push(number);
    arr(array);
  }
  return array;
}
const validSoma = (number) => {
  return new Promise((resolve, reject) => {
    if (number < 8000) {
      resolve(number);
    } else {
      reject('A soma é maior que 8000!');
    }
  });
};

const dividir = (number) => {
  console.log(number)
  return {
    Dividir1: `${number} / 2 = ${number / 2}`,
    Dividir2: `${number} / 3 = ${number / 3}`,
    Dividir2: `${number} / 5 = ${number / 5}`,
    Dividir3: `${number} / 10 = ${number / 10}`
  }
};

const concat = () => {
  const po = arr([]);
  const soma = po.reduce((ac, prev) => ac + prev);
  validSoma(soma)
    .then(result => console.log(result))
    .then(result => { 
      return dividir(result)
    })
    .then(result => console.log(result))
    .catch(erro => console.log(erro));
};

concat();