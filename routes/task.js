const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();
const authentication = require('../middleware/Authentication');

router.get('/', authentication, TaskController.list);
router.post('/', authentication, TaskController.create);
router.get('/mytasks', authentication, TaskController.myTask);
router.get('/:id', authentication, TaskController.byId);
router.delete('/:id', authentication, TaskController.delete);
router.put('/:id', authentication, TaskController.edit);

module.exports = router;