const Author = require('../services/author');

const getAll =  async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
}

const findById = async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
}

const create = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const author = await Author.create(first_name, middle_name, last_name);
  console.log(author)
  if (!author) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  if (author.error && author.error.code === 'alreadyExists') {
    return res.status(200).json(author);
  }

  res.status(201).json({ message: 'Autor criado com sucesso! ', author });
}

module.exports = {
  getAll, 
  findById,
  create
}