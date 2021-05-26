const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const simpsons = require('./readFileSimpsons');

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

app.post('/greetings', (req, res) => {
  console.log(req.query);
  const { age, name } = req.body;
  if (Number(age) > 17) {
    res.status(200).json({ "message": `Hello, ${name}` });
  } else {
    res.status(401).json({ "message": "Unauthorized" });
  }
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.send({ "message": `Seu nome é  ${ name } e  você tem ${ age } anos de idade` })
})

app.get('/simpsons',  (req, res, next) => {
  simpsons.getAllSimpsons().then((resolve) => {
    res.status(200).json(resolve);
  })
  .catch(next);
})

app.get('/simpsons/:id', (req, res, next) => {
  const { id } = req.params;
  simpsons.getSimpsonsId(id)
    .then((result) => {
      if (result) res.status(200).json(result);
      res.status(404).send({message: "simpson not found"})
    })
    .catch(next);
})

app.listen(3000, () => console.log(`App ouvindo a porta 3000:`));
