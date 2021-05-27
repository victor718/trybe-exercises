const express = require('express');
const app = express();

const PORT = 3001;

const server = () => app.listen(PORT, console.log(`SERVER ON ${PORT}`));
module.exports = server;
