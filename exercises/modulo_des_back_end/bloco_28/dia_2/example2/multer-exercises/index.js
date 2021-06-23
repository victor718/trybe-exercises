require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

// const formidable = require();
const { resolve } = require('path');

const PORT = 3001;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(express.static(resolve(__dirname, 'uploads')));

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(`${__dirname}/uploads`));

const checkNameFile = (req, file, callback) => {
  const localDir = fs.readdirSync('./uploads');
  const setName = file.originalname;
  console.log(setName);
  console.log(localDir);
  if (localDir.every((el) => el !== setName)) {
    callback(null, false);
    console.log('AQUI');
    req.fileNameExists = true;
    callback(new Error('Arquivo existe'));
  }
  callback(null, setName);
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, 'uploads'),
  filename: (req, file, callback) => {
    checkNameFile(req, file, callback);
  },
});

const checkFileType = (req, file, callback) => {
  const filetypes = /jpeg|jpg|png|gif/;
  console.log(file);
  if (filetypes.test(file.mimetype)) {
    req.fileType = true;
    callback(null, true);
  } else {
    callback(null, false);
    req.fileType = false;
    return req;
  }
};

const upload = multer({
  storage,
  fileFilter: (req, file, callback) => {
    checkFileType(req, file, callback);
  },
});

app.get('/ping', controllers.ping);

const finalDaRota = (req, res, _next) => {
  const { fileType, fileNameExists } = req;
  console.log(fileType);
  if (fileType && !fileNameExists) {
    return res.status(200).json('OK');
  }
  res.status(403).json('Forbidden');
};

app.post('/files/upload', upload.single('file'), finalDaRota);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
