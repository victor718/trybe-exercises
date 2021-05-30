const User = require('../models/user');
const rescue = require('express-rescue');
const { serialize } = require('../util');

module.exports = rescue(async(req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return next({status: 404, message: 'Usuário nã encontrado' });
  const [result] = user.map(serialize);
  return res.status(200).json(result);
});
