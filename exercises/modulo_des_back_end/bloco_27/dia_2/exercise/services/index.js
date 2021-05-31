const Cep = require('../models/Cep');
const Validation = require('../schema/SchemaError');
const Joi = require('../schema/ValidData');
const Serialize = require('../schema/Serialize');
const ViaCep = require('../models/External');
const Util = require('../util');

const getByCep = async (numeroCep) => {
  const resultDB = await Cep.getByCep(Util.formatCep(numeroCep));
  if (resultDB.length > 0) return resultDB[0];
  const resultExternal = await ViaCep(Util.formatCep(numeroCep));
  if (resultExternal.erro) return Validation([]);
  return Serialize(resultExternal);
}

const create = async (newData) => {
  const resultJoi = Joi(newData);
  if (resultJoi.error) return Validation(resultJoi);
  resultJoi.cep = Util.formatCep(resultJoi.cep);
  const resultDB = await Cep.create(resultJoi);
  if(resultDB.erro) return Validation('alreadyExists');
  return newData;
}

module.exports = {
  getByCep,
  create,
}
