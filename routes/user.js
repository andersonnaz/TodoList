const express = require('express');
const UserController = require('../controllers/UserController');
const AuthAdmin = require('../middleware/AuthAdmin')
const router = express.Router();

router.post('/signup', UserController.create);
router.put('/:id', UserController.edit);
router.post('/signin', UserController.signin);
router.get('/logout', UserController.logout);
router.post('/delete/:id', UserController.delete);
router.get('/', AuthAdmin, UserController.list);

module.exports = router;