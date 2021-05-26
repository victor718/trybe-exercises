const simpsons = require('./readFileSimpsons');

async function getSimpsons(req, res) {
  const simpsons = await simpsons();
}

if (!result) {
  res.status(result.status).json(res.message);
}