function typeNumber(number = undefined) {
  if (typeof number !== 'number') return `Não é um número!!! [ ${ number } | ${ typeof number } ]`;
  if (number > 0) return "positivo";
  if (number < 0) return "negativo";
  return "neutro";
}

module.exports = typeNumber;
