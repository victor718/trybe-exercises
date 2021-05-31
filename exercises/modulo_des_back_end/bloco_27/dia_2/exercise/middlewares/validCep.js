const rescue = require('express-rescue');
const Util = require('../util');
const Schema = require('../schema/SchemaError');

module.exports = rescue(async(req, _res, next) => {
  const { cep } = req.params;
  const valid = Util.isValidCep(cep);
  if (!valid) return next({ status: 400, ...Schema(valid) });
  return next();
});
