const express = require('express');
const bodyParser = require('body-parser');

const Authors = require('../models/Author');
const User = require('../models/User');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await Authors.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Authors.findById(id);
  if (!author) return res.status(404).json({ message: "Not author" });
  
  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Authors.isValid(first_name, middle_name, last_name)){
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  await Authors.create(first_name, middle_name, last_name);
  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.getById(id);
    if (!result) {
      res.status(200).json({error: true, message: "Usuário não encontrado" })
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Erro não encontrado!' });
  }
});

app.put('/user/:id', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const { id } = req.params;
    
    const result = await User.update({
      id, first_name, last_name, email, password });
    
    res.status(201).json(result);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao tentar realizar update!" });
  }
})

app.get('/user', async (req, res) => {
  try {
    const result = await User.getAll();
    if(result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(200).json([]);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Erro não esperado!!!' });
  }
})

app.post('/user', async (req, res) => {
  const { first_name, last_name, email, password} = req.body;
  const resultValid = User.isValid({first_name, last_name, email, password});
  if (resultValid.error) {
    return res.status(400).json(resultValid);
  }
  try {
    const result = await User.create(first_name, last_name, email, password);
    res.status(201).json(result);
  }catch (err) {
    console.log(err);
    res.status(500).send('Erro ao tentar realizar operação!');
  }
});



const server = () => app.listen(PORT, console.log(`SERVER ON ${PORT}`));
module.exports = server;
