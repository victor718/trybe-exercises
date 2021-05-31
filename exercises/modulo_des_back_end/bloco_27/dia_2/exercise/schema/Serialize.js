module.exports = (cepData) => ({
  cep: cepData.cep,
  logradouro: cepData.logradouro,
  bairro: cepData.bairro,
  localidade: cepData.localidade,
  uf: cepData.uf,
});
