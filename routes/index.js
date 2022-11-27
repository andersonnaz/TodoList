const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const taskRoutes = require('./task');
const viewRoutes = require('./view');

router.use('/', viewRoutes);
router.use('/api/task', taskRoutes);
router.use('/api/user', userRoutes);

module.exports = router;