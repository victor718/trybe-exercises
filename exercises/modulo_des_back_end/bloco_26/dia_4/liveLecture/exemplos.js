const express = require('express');
const app = express();

/*ROta com caminho "/" utilizando o método GET */
app.get('/', function(req, res) {
  res.send('hello world');
});

/* Rota com caminho '/' utilizando o método POST */
app.post('/', function(req, res) {
  res.send('hello world');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function(req, res) {
  res.send('hello world');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app.route('/')
  .get(function(req, res) {
    res.send('hello world get');
  })
  .post(function(req, res) {
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// ================================================================

// ----------------------------------------------------------------
// Existe também a possibilidade de se passar N callbacks para a mesma rota:
// ----------------------------------------------------------------
app.get('/ping',
  function(req, res, next) {
    console.log('fiz alguma coisa');
    /* Chama a próxima callback */
    next(); 
  },
  function (req, res) {
    /* A segunda (e última) callback envia a resposta para o cliente */
    res.send('pong!');
  }
);

/* Também podemos utilizar um array para especificar múltiplos callbacks */
app.get('/hello', [
  (req, res, next) => {
    console.log('primeiro callback acionado');
    next();
  },
  (req, res, next) => {
    console.log('segundo callback acionado');
    res.send('hello, world!');
  }
]);
