const connection = require('./Connection');
const { ObjectId } = require('mongodb');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name).join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName: fullName
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.lastName,
  }
}

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>  {
      return authors.map(({ _id, firstName, middleName, lastName }) => {
        return getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      })
    });
}

const findById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)));
  
  if (!authorData) return null;
  if (authorData.length === 0) return null;
  const { firstName, middleName, lastName } = authorData;
  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  });
}

const isValid = (firstName, _middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  return true;
}

const create = async (firstName, middleName, lastName) => {
  await connection()
    .then((db) => db.collection('authors').insertOne({
      firstName,
      middleName,
      lastName
    }));
}

module.exports = {
  getAll,
  findById,
  isValid,
  create,
}