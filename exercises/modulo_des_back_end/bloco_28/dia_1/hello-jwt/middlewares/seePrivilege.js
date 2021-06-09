module.exports = (req, res, _next) => {
  const { decoded: { data } } = req;
  return res.status(200).json({ username: data.username, admin: data.admin });
};