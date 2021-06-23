// ---- Gabarito dos exercícios --------
/// https://app.betrybe.com/course/back-end/architecture/solid/solutions

const express = require('express');

const app = express();
const plantsModule = require('./plants');

app.use(express.json());

const PLANT_ID = '/plant/:id';

app.get('/plants', (req, res) => {
  const plants = plantsModule.getPlants();
  console.log(plants);
  res.send(plants);
});

app.get(PLANT_ID, (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantById(id);
  res.send(plant);
});

app.delete(PLANT_ID, (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.removePlantById(id);
  res.send(plant);
});

app.post(PLANT_ID, (req, res) => {
  const { id } = req.params;
  const newPlant = req.body.plant;
  const plant = plantsModule.editPlant(id, newPlant);
  res.send(plant);
});

app.post('/plant', (req, res) => {
  const newPlant = req.body.plant;
  const plant = plantsModule.createNewPlant(newPlant);
  res.send(plant);
});

app.get('/sunny/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantById(id);
  return res.send(plant);
});

app.listen(3001, () => {
  console.log('Ouvindo a porta 3001!');
});