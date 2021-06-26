const express = require('express');
const {
  Router: router,
} = express;
const route = router();
const {
  Book,
} = require('../models');

route.get('/books', async (_req, res) => {
  const allBooks = await Book.findAll();
  res.status(200).json(allBooks);
});

route.get('/book/:id', async (req, res) => {
  const {
    id,
  } = req.params;
  console.log(id);
  const getBook = await Book.findByPk(Number(id));
  console.log(getBook);
  res.status(200).json(getBook);
});

route.post('/book', (req, res) => {
  const {
    title,
    author,
    pageQuantity,
  } = req.body;
  Book.create({
    title,
    author,
    pageQuantity,
  })
      .then((newBook) => {
        res.status(200).json(newBook);
      })
      .catch((err) => {
        console.error(err.message);
        res.status(500).json({
          message: 'Algo deu errado',
        });
      });
});

route.put('/book/:id', (req, res) => {
  const {title, author, pageQuantity} = req.body;
  Book.update({
    title,
    author,
    pageQuantity,
  }, {
    where: {
      id: req.params.id,
    },
  })
      .then((book) => {
        res.status(200).json({
          message: 'Livro atualizado com sucesso!!!',
        });
      })
      .catch((err) => {
        console.error(err.message);
        res.status(500).send({
          message: 'Algo deu errado',
        });
      });
});

route.delete('/book/:id', (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id,
    },
  })
      .then((book) => {
        res.status(200).send({message: 'Produto excluído com sucesso. '});
      })
      .catch((err) => {
        console.error(e.message);
        res.status(500).send({message: 'Algo deu errado'});
      });
});

module.exports = route;
