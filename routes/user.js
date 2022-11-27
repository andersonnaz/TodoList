const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.post('/signup', UserController.create);
router.put('/:id', UserController.edit);
router.post('/signin', UserController.signin);
router.get('/logout', UserController.logout);

module.exports = router;