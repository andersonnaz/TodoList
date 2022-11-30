const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();
const authentication = require('../middleware/Authentication');

router.get('/', authentication, TaskController.list);
router.post('/', authentication, TaskController.create);
router.post('/edit', authentication, TaskController.edit);
router.get('/mytasks', authentication, TaskController.myTask);
router.post('/done/:id', authentication, TaskController.done);
router.get('/edit/:id', authentication, TaskController.renderEditTaskPage);
router.post('/delete/:id', authentication, TaskController.delete);

module.exports = router;