const socket = io('http://localhost:4555/');


const getLike = ({ target }) => {
  target.innerText = Number(target.innerText) + 1;
  socket.emit('likePost', {  })
}

document.getElementById('likeIcon').addEventListener((e) => getLike);

