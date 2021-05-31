const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  user: 'root',
  password: 'edc147rfv258',
  host: 'localhost',
  database: 'cep_lookup',
});
