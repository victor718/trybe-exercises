const express = require('express');
const middlewares = require('../middlewares');
const router = express.Router();

router.get('/user', middlewares.getAll);
router.get('/user/:id', middlewares.getById);
router.post('/user', middlewares.createUser);
router.put('/user/:id', middlewares.update);

router.use(middlewares.erro);

module.exports = router;
