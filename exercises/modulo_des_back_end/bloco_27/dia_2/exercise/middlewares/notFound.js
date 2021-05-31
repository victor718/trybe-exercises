const rescue = require('express-rescue');

module.exports = rescue(async(_req, _res, next) => {
  next({ status: 404, error: { code: 'notFound', message: 'Route not found!' } });
});
