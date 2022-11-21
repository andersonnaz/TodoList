const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const taskRoutes = require('./task');

router.use('/', taskRoutes);
router.use('/user', userRoutes);



module.exports = router;