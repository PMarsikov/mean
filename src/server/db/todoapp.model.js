var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	severity : {
		type : String,
		required : true
	},
	task : {
		type : String,
		required : true
	},
	isCompleted : {
		type : Boolean
	},
	isEditing : {
		type : Boolean
	}

});

mongoose.model('Todo', todoSchema, 'todo');
