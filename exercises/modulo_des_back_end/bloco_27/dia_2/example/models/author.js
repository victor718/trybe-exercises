const connection = require('./connection');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => authors);
}

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => result);

const findByName = async (firstName, middleName, lastName) => {
  const query = middleName
    ? { firstName, middleName, lastName }
    : { firstName, lastName };

  const author = await connection()
    .then((db) => db.collection('authors').findOne(query));

  if (!author) return null;

  return author;
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
      return null;
  }

  const authorData = await connection()
      .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return authorData;
};

module.exports = {
  getAll,
  findById,
  create,
  findByName
};