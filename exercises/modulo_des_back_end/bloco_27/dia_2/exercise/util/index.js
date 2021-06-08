const isValidCep = (cep) => {
  const regex = new RegExp(/\d{5}-?\d{3}/);
  return regex.test(cep);
}

const formatCep = (cep) => {
  const regex = new RegExp(/\D/);
  return cep.replace(regex, '');
}


module.exports = {
  isValidCep,
  formatCep
}