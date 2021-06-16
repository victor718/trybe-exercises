const bcrypt = require('bcrypt');
const password = 'qQ.,osy8,nfskjfs??bnfbh4QaCVzsdgkjxhvkjx1slk'
const salt = bcrypt.genSaltSync(20);
const encrypt = bcrypt.hashSync(password, salt);
const decode = bcrypt.compareSync(password, encrypt);
console.log('PASSWORD', password);
console.log('SAL', salt);
console.log('hash', encrypt);
console.log(decode);