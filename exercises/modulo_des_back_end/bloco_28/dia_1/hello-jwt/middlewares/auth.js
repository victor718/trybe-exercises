const jwt = require('jsonwebtoken');

const security = 'meusegredo123';

module.exports = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) {
      return next({ statusCode: 401, message: 'Token not found' });
    }

    const decoded = jwt.verify(token, security);
    req.decoded = { ...decoded };
    next();
  } catch (err) {
    return next({ statusCode: 401, message: err.message });
  }
};
