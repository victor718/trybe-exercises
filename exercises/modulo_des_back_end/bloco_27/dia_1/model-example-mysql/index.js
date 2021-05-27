const express = require('express');
const app = express();
const PORT = 3001;

const Author = require('./models/Author');
const Books = require('./models/Book');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books/:author_id', async (req, res) => {
    const { author_id } = req.params;
    const books = await Books.getByAuthorId(author_id);
    res.status(200).json(books);
})



app.listen(PORT, () => console.log('Example app listening on port port!'));