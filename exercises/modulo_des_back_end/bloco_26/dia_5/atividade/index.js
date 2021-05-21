const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

const PORT = 3000;
const middleware = require('./middlewares');

app.use(bodyParser.json());

app.use(middleware.error);
app.get('/post', middleware.getAllPosts);
app.get('/posts', middleware.searchPosts, middleware.getAllPosts);

// app.use('/', router);

app.listen(PORT, () => console.log(`listen on ${ PORT }`));
