const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();

router.get('/', TaskController.list);
router.get('/task/:id', TaskController.byId);
router.post('/create', TaskController.create);
router.delete('/delete', TaskController.delete);
router.put('/edit', TaskController.edit);

module.exports = router;