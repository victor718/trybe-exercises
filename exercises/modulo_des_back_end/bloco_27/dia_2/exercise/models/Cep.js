const connection = require('./connection');

const getByCep = async (numberCep) => {
  try {
    const [cep] = await connection.execute(
      'SELECT * FROM ceps WHERE cep = ?',
      [numberCep]
    );
    return cep;
  } catch (err) {
    return { erro: { code: err.code,  message: 'Erro na busca do cep!' } }
  }
}

const create = async (newData) => {
  const { cep, logradouro, bairro, localidade, uf } = newData;
  try {
    const result = await connection.execute(
      'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
      [cep, logradouro, bairro, localidade, uf]
    );
    return result[0].insertId;
  }catch(err) {
    return { erro: { code: err.code, message: 'Erro no inserção de um novo cep!' } }
  }
}

// {
//   "cep": "01001-000",
//   "logradouro": "Praça da Sé",
//   "bairro": "Sé",
//   "localidade": "São Paulo",
//   "uf": "SP",
// }

module.exports = {
  getByCep,
  create,
}