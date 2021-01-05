const data = require('./data.js');

// Pesquisa
const searchEmployee = (id, detail) => {
  const keys = Object.keys(data[0]);
  const ids = data.map(element => element.id);
  if (!ids.includes(id)) return 'ID não identificado';
  if (!keys.includes(detail)) return 'Informação indisponível';
  const result = data.find(element => element.id == id)
  return result[detail];
};

module.exports = searchEmployee;
