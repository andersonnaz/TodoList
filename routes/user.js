const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.post('/create', UserController.create);

router.post('/sign-up', (request, response) => {
    response.send('criar usuário');
});

router.get('/sign-in', (request, response) => {
    response.send('entrar com usuário válido');
});

module.exports = router;