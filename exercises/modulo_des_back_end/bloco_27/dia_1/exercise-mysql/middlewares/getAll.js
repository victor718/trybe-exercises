const User = require('../models/user');
const rescue = require('express-rescue');
const { serialize } = require('../util');

module.exports = rescue(async(_req, res, next) => {
  try{
    const users = await User.getAll();
    if (users.length < 1) return res.status(200).json([]);
    const result = users.map(serialize);
    return res.status(200).json(result);
  }catch(err){
    console.log(err);
    next({status: 500, message: 'Erro não esperado'})
  };
});