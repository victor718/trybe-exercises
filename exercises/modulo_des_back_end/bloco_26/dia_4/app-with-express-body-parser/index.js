const express = require('express');
const app = express();
const authMiddleware = require('./auth-middleware');

app.get('/aberto', (req, res) => {
  res.status(200).json({ message: 'Eu posso ser acessado sem autenticação.' });
});

app.get('/secure', authMiddleware, (req, res) => {
  res.status(200).json({
    message:
      'se esse middleware foi chamado pelo Express, é porque deu tudo certo dentro de `authMiddleware`, e o `next` foi chamado',
  });
});

app.get('/otherSecure', authMiddleware, (req, res) => {
  res.status(200).json({
    message: 'podemos utilizar o mesmo middleware pra quantas rotas quisermos',
  });
});


function timeMiddleware(req, res, next) {
  req.startTime = Date.now();
  next();
}

app.get('/tempo', timeMiddleware, (req, res) => {
  const endTime = Date.now() - req.startTime;
  res.status(200).json({
    message: `essa request foi processada em ${endTime} milissegundos`,
  });
});

