const serialize = (user) => {
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    password: user.password,
  }
}

const isValidPassword = (user) => {
  return user.password.length > 5 ? true : false;
}

const isValidSchema = (user) => {
  const schema = ['first_name', 'last_name', 'email', 'password'];
  return schema.find((el) => !user[el] || typeof user[el] !== 'string')
}

const isValid = (user) => {
  const result = isValidSchema(user);
  if (result) return {
    error: true,
    message: `O campo ${result} deve estár preenchido!`
  };
  if(!isValidPassword(user)) return {
    error: true,
    message: 'O campo "password" deve ter pelo menos 6 caracteres'
  };
  return true;
}

module.exports = {
  serialize,
  isValid,
}