const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

const Author = require('./models/Author');
const Books = require('./models/Book');
const connection = require('./models/connection');

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books/:author_id', async (req, res) => {
    const { author_id } = req.params;
    const books = await Books.getByAuthorId(author_id);
    res.status(200).json(books);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.finById(id);
  if (!author) return res.status(404).json({ message: "Not author" });

  res.status(200).json(author);
});

app.post('/authors', async(req, res) => {
  console.log(req)
  const { first_name, middle_name, last_name } = req.body;
  if(!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados inválidos' });

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso!'});
})

app.listen(PORT, () => console.log('Example app listening on port port!'));
