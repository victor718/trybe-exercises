const net = require('net');
const sockets = [];
const PORT = 2708;
let guestId = 0;
const count = 0;

const server = net.createServer((socket) => {
  guestId++;

  socket.guest = 'Guest ' + guestId;
  sockets.push(socket);

  socket.write('Bem vindo ao chat!!!\n');
  
  disparo(socket.guest, socket.guest + 'entrou no chat');
  
  socket.on('end', () => {
    sockets.splice(sockets.indexOf(socket), 1);
    const message = socket.guest + 'deixou o chat.\n';
    disparo(socket.guest, message);
  });

  socket.on('data', (data) => {
    const message = socket.guest + '> ' + data.toString();
    disparo(socket.guest, message);
  });

  socket.on('error', (error) => {
    console.log(`Erro no socket: [ ${error.message} ]`);
  });

});

const disparo = (from, message) => {
  sockets.forEach((socket, index, array) => {
    if (socket.guest === from) return;
    socket.write(message);
  });
}

server.on('error', (error) => {
  console.log(`Erro no servidor: [ ${error.message} ]`);
});

server.listen(PORT, () => console.log(`Servidor está escutando na porta ${ PORT }`));
