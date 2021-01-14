function hydrate(drinks) {
  // seu código aqui
  let resultado = drinks.match(/\d+/g);
  let total = 0;

  for (let x = 0; x < resultado.length; x += 1) {
    total += parseInt(resultado[x], 0);
  }

  if (total === 1) {
    return `${total} copo de água`;
  }
  return `${total} copos de água`;
}

module.exports = hydrate;