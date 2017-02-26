var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

// Get All todo
module.exports.todosGetAll = function(req, res) {
	Todo
		.find()
		.exec(function(err, todos) {
			if (err) {
				console.log("Error finding todo");
				res
					.status(500)
					.json(err)
			} else {
				console.log("Found todos - ", todos.length)
				res
				.json(todos)
			}
			
		});
};

// Add new todo
module.exports.addTodo = function(req, res) {
	Todo
		.create({
			severity : req.body.severity,
			task : req.body.task,
			isCompleted : req.body.isCompleted
		}, function(err, todo) {
			if (err) {
				console.log("Error creating todo");
				res
					.status(400)
					.json(err);
			} else {
				console.log("Toto added ", todo);
				res
					.status(201)
					.json(todo);
			}
		});
};

// Detele task
module.exports.deleteTodo = function(req, res) {
	var todoId = req.params.todoId;
	Todo
		.findByIdAndRemove(todoId)
		.exec(function(err, location) {
			if (err) {
				res
					.status(404)
					.json(err);
			} else {
				console.log("Todo deleted, id: ", todoId);
				res
					.status(204)
					.json();
			}
		});
};


// Update task
module.exports.updateTodo = function(req, res) {
	var todoId = req.params.todoId;

	Todo
		.findById(todoId)
		.exec(function(err, todo) {
			if (err) {
				console.log("Error finding todo");
				res
					.status(500)
					.json(err);
				return;
			} else if (!todo) {
				console.log("TodoId not found in db ",TodoId);
				res
					.status(404)
					.json({
						"message" : "Todo ID not found " + TodoId
					});
				return;	
			}
			todo.severity = req.body.severity;
			todo.task = req.body.task;
			todo.isCompleted = req.body.isCompleted;

			todo
				.save(function(err, todoUpdated) {
					if (err) {
						res
							.status(500)
							.json(err);
					} else {
						res
							.status(204)
							.json();
					}
				});
		});
};