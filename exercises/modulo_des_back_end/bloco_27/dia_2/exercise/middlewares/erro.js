const rescue = require('express-rescue');

module.exports = (err, _req, res, _next) => {
  if (err.error && err.status) {
    return res.status(err.status).json(err.error);
  }
  return res.status(500).json({ code: 'notFound', message: 'Unknown error'});
}
