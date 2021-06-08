const Services = require('../services');
const rescue = require('express-rescue');

const getByCep = rescue(async(req, res, next) => {
  const { cep } = req.params;
  const resultService = await Services.getByCep(cep);
  if (resultService.error) return next({ ...resultService });
  return res.status(200).json(resultService);
});

const createNewCep = rescue(async(req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const resultService = await Services.create({ cep, logradouro, bairro, localidade, uf });
  if (resultService.error) return next({ ...resultService });
  return res.status(201).json(resultService);
})

module.exports = {
  getByCep,
  createNewCep,
}