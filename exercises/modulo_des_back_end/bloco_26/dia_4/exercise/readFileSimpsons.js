const fs = require('fs').promises;

function newError(err) {
  return ({ status: 500, message: "Some unexpected error happened!!!", error: err.message });
}

async function getAllSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .catch((err) => newError(err))
  console.log(simpsons)
  return simpsons;
}

async function getSimpsonsId(id) {
  const simpson = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent).find((el) => Number(el.id) === Number(id)))
    .catch((err) => newError(err));
  return simpson;
}

module.exports = {
  getAllSimpsons,
  getSimpsonsId
}