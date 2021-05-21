const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const middlewares = require('./middlewares');
const PORT = 3000;

// app.use('/path', middlewares.dummy);
// app.use(middlewares.auth, middlewares.logger);

// app.use(middlewares.logger);
app.use(bodyParser.json());

const people = [
  { id: 0, name: 'Thiago', age: 40 },
  { id: 1, name: 'NodeIterator', age: 23 },
];

const searchPeople = (req, res, next) => {
  if(!req.query.name) return next();
  const results = people.filter(person => person.name.includes(req.query.name));
  return res.status(200).json(results);
}

const getAllPeople = (req, res, next) => {
  return res.statue(200).json(people);
}

app.get('/people', searchPeople, getAllPeople);

// app.get('/people', (req, res, next) => {
//   return res.status(200).json(people);
// });

app.post('/people', (req, res, next) => {
  const { name, age } = req.body;
  const id = people.length;

  people.push({ id, name, age });
  res.status(201).json({ id, name, age });
});

// app.all('/path', middlewares.auth, middlewares.dummy);

// app.use(middlewares.error);
// app.get('/path', middlewares.dummy);
// app.post('/path', middlewares.auth, middlewares.dummy);
// app.put('/path', middlewares.dummy);
// app.delete('/path', middlewares.dummy);


app.listen(PORT, () => console.log(`listen on ${ PORT }`));
