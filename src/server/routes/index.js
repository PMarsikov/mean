var express = require('express');
var router = express.Router();

var controllerTodo = require('../controllers/todoApiController.js');

router
	.route('/todos')
	.get(controllerTodo.todosGetAll)
	.post(controllerTodo.addTodo);

router
	.route('/todos/:todoId')
	.delete(controllerTodo.deleteTodo)
	.put(controllerTodo.updateTodo);

module.exports = router;


