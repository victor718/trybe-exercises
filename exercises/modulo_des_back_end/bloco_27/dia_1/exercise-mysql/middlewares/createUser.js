const User = require('../models/user');
const rescue = require('express-rescue');
const { serialize, isValid } = require('../util');

module.exports = rescue(async(req, res, next) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const resultVali = isValid({ first_name, last_name, email, password });
    if (resultVali.error) {
      return next({ status: 400, message: resultVali})
    }
    const result = await User.create({ first_name, last_name, email, password });
    console.log(result);
    res.status(200).json({ message: 'usuário inserido com sucesso', insertId: result});
  } catch (err) {
    console.error(err);
    next(err);
  }
});
