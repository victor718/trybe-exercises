const User = require('../models/user');
const rescue = require('express-rescue');
const { serialize, isValid } = require('../util');

module.exports = rescue(async(req, res, next) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const { id } = req.params;
    const getUser = await User.findById(id);
    if (!getUser) return next({ status: 404, message: 'Usuário não encontrado' });
    const resultValid = isValid({ first_name, last_name, email, password });
    if (resultValid.error) return next({ status: 200, message: resultValid });

    const result = await User.update({ first_name, last_name, email, password }, id);
    if (result.code) return next({status: 400, message: result });
    res.status(200).json({ message: 'Usuário atúalizado com sucesso', result})
  } catch (err) {
    console.error(err);
    next(err);
  }
});
