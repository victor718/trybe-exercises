const express = require('express');
const middleware = require('../middlewares');
const Controller = require('../controllers');
const router = express.Router();

router.get('/ping', (req, res) => res.status(200).json({ message: 'pong!' }));
router.get('/cep/:cep',[middleware.validCep, Controller.getByCep]);
router.post('/cep', Controller.createNewCep);
router.all('*', middleware.notFound);
router.use(middleware.erro);

module.exports = router;
