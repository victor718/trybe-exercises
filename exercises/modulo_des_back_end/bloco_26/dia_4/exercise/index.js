const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (_req, res) => {
  res.send({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  console.log(name)
  res.send({ "message": `Hello ${ name }` });
})

app.listen(3000, () => console.log(`App ouvindo a porta 3000:`));