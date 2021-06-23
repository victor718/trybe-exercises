const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  },
})

const upload  = multer({ storage });

// const upload = multer({ dest: 'uploads/' });

app.post('/uploads', upload.single('arquivo'), (req, res) => {
  console.log(req.body, req.file)
  res.send('ok');
})

app.listen(3001, () => console.log('ONLINE!'));
