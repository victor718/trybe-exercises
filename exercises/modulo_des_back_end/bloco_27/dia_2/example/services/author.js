const Author = require('../models/author');

const isNonEmptyString = (value) => {
  if (!value) return false;

  return typeof value === 'string';
};

const isValid = (firstName, middleName, lastName) => {
  if (middleName && typeof middleName !== 'string') return false;

  return isNonEmptyString(firstName) && isNonEmptyString(lastName);
};

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
   };
};

const getAll = async () => {
  const authors = await Author.getAll();
  
  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await Author.findById(id);

  return author.map(getNewAuthor);
};

const create = async (firstName, middleName, lastName) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);
  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Um autor já existe com esse nome completo',
      },
    };
  }

  const authorValid = isValid(firstName, middleName, lastName);
  if (!authorValid) return false;
  const { insertedId } = await Author.create(firstName, middleName, lastName);
  
  return getNewAuthor({
    id: insertedId,
    firstName,
    middleName,
    lastName
  })
};

module.exports = {
  getAll,
  findById,
  create,
};