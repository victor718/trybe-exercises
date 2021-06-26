const express = require('express');
const route = require('./src/controllers');
const bodyparse = require('body-parser');

const app = express();

const PORT = 3000;

app.use(bodyparse.json());
app.use(route);


app.listen(PORT, () => console.log(`Ouvindo na porta ${ PORT }`));
