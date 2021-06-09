const jwt = require('jsonwebtoken');

const security = 'meusegredo123';

// eslint-disable-next-line max-lines-per-function
module.exports = (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return next({ statusCode: 401, message: 'Name ou password inválido!!!' });
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    console.log(username.includes('admin'));

    const payload = {
      username,
      admin: !!username.includes('admin'),
    };

    const token = jwt.sign({ data: payload }, security, jwtConfig);
    
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};