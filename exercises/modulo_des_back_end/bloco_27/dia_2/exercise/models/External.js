const fetch = require('node-fetch');

module.exports = (cep) => {
  const resultJson =  fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resolve) => resolve.json())
      .then((data) => data);
  return resultJson;
}
