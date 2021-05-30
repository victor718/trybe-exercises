const { ObjectId, ObjectID } = require('bson');
const connection = require('./Connection');

const serialize = (user) => ({
  id: user._id,
  firstName: user.first_name,
  lastName: user.last_name,
  email: user.email,
  password: user.password,
});

const isValidPassword = (user) => {
  return user.password.length > 5 ? true : false;
}

const isValidSchema = (user) => {
  const schema = ['first_name', 'last_name', 'email', 'password'];
  return schema.find((el) => !user[el] || typeof user[el] !== 'string')
}

const isValid = (user) => {
  if(!isValidPassword(user)) return {
    error: true,
    message: 'O campo "password" deve ter pelo menos 6 caracteres'
  };
  const result = isValidSchema(user);
  if (result) return {
    error: true,
    message: `O campo ${result} deve estár preenchido!`
  };
  return true;
}

const create = async (first_name, last_name, email, password) => (
  await connection()
    .then((db) => db.collection('user').insertOne({
      first_name, last_name, email, password
    }))
    .then((result) => serialize(result.ops[0]))
);

const getAll = async () => (
  connection()
    .then((db) => db
    .collection('user')
    .find()
    .toArray())
    .then((result) => result.map(serialize))
);

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connection()
    .then((db) =>
    ObjectId.isValid(id)
    ? db.collection('user').findOne({ _id: ObjectID(id)})
    : null
  );
}

const update = async (user) => {
  const { id, first_name, last_name, email, password } = user;
  const getUser = await getById(id);
  if (!getUser) return { "error": true, message: "Usuário não encontrado" }
  if (!ObjectId.isValid(id)) return { error: true, message: 'Id inválido!' };
  const resultValid = isValid(user);
  if (resultValid.error) return resultValid;
  await connection()
    .then((db) => db
      .collection('user')
      .updateOne(
        { _id: ObjectID(id) },
        { $set: { first_name, last_name, email, password } })
    );
  return user;
}

module.exports = {
  isValid,
  create,
  getAll,
  getById,
  update,
}