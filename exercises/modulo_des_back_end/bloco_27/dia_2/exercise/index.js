const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const helmet = require('helmet');

const app = express();
app.use(helmet());

const PORT = 3000;

process.on('uncaughtException', err => {
  console.error('There was an uncaught error', err)
  // process.exit(1) //mandatory (as per the Node.js docs)
})

app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => console.log('SERVIDOR ONLINE!!!'));
