const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();

router.get('/', TaskController.list);
router.get('/:id', TaskController.byId);
router.post('/', TaskController.create);
router.delete('/:id', TaskController.delete);
router.put('/:id', TaskController.edit);

module.exports = router;