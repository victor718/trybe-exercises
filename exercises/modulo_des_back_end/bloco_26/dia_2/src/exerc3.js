// const fs = require('fs').promises;
// exibi
async function getSimpsonById(id) {
  const simpsons = await fs
    .readFile('./src/simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }

  return chosenSimpson;
}

console.log(getSimpsonById(3).then((r)=> r));


// filtra
// const fs = require('fs').promises;
async function filterSimpsons() {
  const simpsons = await fs
    .readFile('./src/simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

    const newArray = simpsons.filter((simpson) => simpson.id !== 10 && simpson.id !== 6);
    await fs.writeFile('./src/simpsons.json', JSON.stringify(newArray));
}

filterSimpsons();


// cria arquivo novo
// const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./src/simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
  const simpsonFamily = simpsons.filter((simpson => [1, 2, 3, 4].includes(simpson.id)));
  await fs.writeFile('./src/simpsonsFamily.json', JSON.stringify(simpsonFamily));
}

createSimpsonsFamily();

//add personagem
// const fs = require('fs').promises;

async function addNelsonToFamily() {
  const simpsonFamily = await fs
    .readFile('./src/simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
  simpsonFamily.push({ "id": "8","name": "Nelson Muntz" });
  await fs.writeFile('./src/simpsonsFamily.json', simpsonFamily);
}
addNelsonToFamily();

const fs = require('fs').promises;
function replaceNelson() {
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}
