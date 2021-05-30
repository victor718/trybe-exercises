const mysql = require('mysql2');
const connection = require('./connection');
const { serialize } = require('../util');

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users;
}

const findById = async (id) => {
  const [userById] = await connection.execute(
    'SELECT * FROM users WHERE id = ?',
    [id]
  );
  if (userById.length === 0) return null;
  return userById;
}

const create = async (user) => {
  const { first_name, last_name, email, password } = user;
  try{
    const result = await connection.query(
      'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
      [first_name, last_name, email, password]
      );
    return result[0].insertId;
  }catch(err) {
    console.error(err);
    return { code: err.sqlState, message: 'Não foi possível inserir novo usuário' }
  }
}
const auxUpdate = (arrUser) => {
  return Object.keys(arrUser).map((el) => `${el} = '${arrUser[el]}'`).join(", ");
}

const update = async (arrUser, id) => {
  const isColumnUpdate = auxUpdate(arrUser);
  const sql = mysql.format(
    `UPDATE users_crud.users SET ${isColumnUpdate} WHERE id = ?`,
    [id]
  );
  console.log(sql)
  try {
    const result = await connection.query(sql);
    return result[0].info;   
  }catch(err) {
    console.error(err);
    return { code: err.sqlState, message: 'Não foi possível atualizar o usuário!' };
  }
}

module.exports = {
  getAll,
  findById,
  create,
  update,
}
















// const mysql = require('mysql2');
// let sql = "SELECT * FROM ??";
// const inserts = ['users'];
// sql = mysql.format(sql, inserts);