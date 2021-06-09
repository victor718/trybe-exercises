module.exports = (req, res, next) => {
  const { decoded: { data } } = req;

  if (!data.admin) {
    return next({ statusCode: 403, message: 'Restricted access' });
  }

  return res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Aranha' });
};