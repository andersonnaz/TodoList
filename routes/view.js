const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.redirect('/api/task');
});

router.get('/create', (request, response) => {
    const user = request.session.user;
    response.render('tasks/createTask', {user});
});

router.get('/edit/:id', (request, response) => {
    response.redirect(`/api/task/edit/${request.params.id}`);
});

router.get('/login', (request, response) => {
    response.render('users/login');
});

router.get('/signup', (request, response) => {
    response.render('users/createUser');
});

router.get('/mytasks', (request, response) => {
    response.redirect('/api/task/mytasks');
});

router.get('/users', (request, response) => {
    response.redirect('/api/user/');
});


module.exports = router;