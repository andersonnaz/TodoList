const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.redirect('/api/task');
});

router.get('/create', (request, response) => {
    response.render('tasks/createTask');
});

router.get('/login', (request, response) => {
    response.render('users/login');
});

router.get('/signup', (request, response) => {
    response.render('users/createUser');
});


module.exports = router;