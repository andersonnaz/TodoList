const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();
const authentication = require('../middleware/Authentication');

router.get('/', TaskController.list);
router.post('/', TaskController.create);
router.get('/:id', TaskController.byId);
router.delete('/:id', TaskController.delete);
router.put('/:id', TaskController.edit);


module.exports = router;