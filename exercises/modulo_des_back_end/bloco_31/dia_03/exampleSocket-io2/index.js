const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }
});

app.use(express.static(__dirname + '/public'));
require('./sockets/ping')(io);
require('./sockets/chat')(io);
require('./sockets/rooms')(io);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log("Servido ouvindo na porta 3000"));

http.listen(4555, () => {
  console.log('Socket.io ouvindo na porta 4555');
});
