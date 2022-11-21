const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.post('/signup', UserController.create);
router.put('/edit/:id', UserController.edit);
router.get('/signin', UserController.signin);
router.get('/login', )

module.exports = router;