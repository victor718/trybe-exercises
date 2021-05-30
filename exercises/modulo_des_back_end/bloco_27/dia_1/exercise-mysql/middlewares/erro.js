module.exports = (err, req, res, next) => {
  if (err.status && err.message) {
    return res.status(err.status).json({ error: err.message });
  }
  res.status(500).json({ error: err.message });
}
