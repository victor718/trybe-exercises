const connection = require('./connection');

const getAll = async () => {
  const result = await connection.execute('SELECT id, title, author_id FROM books');

  return result;
}

const getByAuthorId = async (id) => {
  const query = (`SELECT 
    b.id, b.title, b.author_id, a.first_name as author
    FROM books as b
    INNER JOIN authors as a
    ON b.author_id = a.id
    WHERE author_id = ${id}
    `);
  const [authorsById] = await connection.execute(query);
  return authorsById;
}

module.exports = {
  getAll,
  getByAuthorId
}
