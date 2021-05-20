const express = require('express');
const rescue = require('express-rescue');
const app = express();
const router = express.Router();

const authMiddleware = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(401);
    res.send({ message: 'Token Inválido!' });
  }
}

const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado :(');
}

const logRequestMiddleware = (req, res, next) => {
  console.log(`${ req.method } ${ req.path }`);
  next();
}

app.use(express.json());
app.use(logRequestMiddleware);
router.use(authMiddleware);

router.get('/hello', (req, res) => {
  res.send({ message: 'Hello World!' });
});

router.get('/ola', (req, res) => {
  res.send({ message: 'Olá Mundo!' });
});

app.use('/secure', router);

app.get('/', (_req, res) => {
  res.send({ message: 'Não sou segura!' });
});

app.get('./error', rescue(async(req, res) => {
  throw new Error('Eu retorno um erro');
}));

app.post('/login', (req, res) => {
  console.log(req.body);
  req.send(req.body);
});

app.use(errorHandlerMiddleware);

app.listen(3000, () => console.log(`App ouvindo a porta 3000:`));
