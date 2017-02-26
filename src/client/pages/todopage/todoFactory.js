angular.module('todoapp').factory('todoPageFactory',todoPageFactory);

function todoPageFactory($http, $route) {
	return {
		createTask: createTask,
		updateTask: updateTask,
		changeStatus: changeStatus,
		deleteTask: deleteTask,
		watchCreateTaskInput: watchCreateTaskInput,
		watchCreateTaskSeverityInput:watchCreateTaskSeverityInput,
		getTodos: getTodos
	};


	// get all tasks
	function getTodos($scope) {
		$http.get('/todos')
			.success(function(response) {
				$scope.todos = response;
			});
	};
	

	// create task
	function createTask($scope, params){		
		// POST Request
		$http.post('/todos', {
			severity: $scope.createTaskSeverityInput, 
			task: $scope.createTaskInput,
			isCompleted: false
		}).success(function(response) {
			// Update DOM
			$scope.todos[$scope.todos.length - 1]._id = response._id
			params.createHasInput = false;
			$scope.createTaskInput = '';
		});

		
	};

	// update task
	function updateTask(todo) {
		//todo.updatedTask - from ng-model at input box
		todo.task = todo.updatedTask;
		todo.isEditing = false;
		// PUT Request. Update db
		$http.put('/todos/'+todo._id, {
			severity: todo.severity, 
			task: todo.updatedTask,
			isCompleted: todo.isCompleted
		});

	};

	// change task Status
	function changeStatus(todo) {	
		// PUT Request. Update db
		$http.put('/todos/'+todo._id, {
			severity: todo.severity, 
			task: todo.task,
			isCompleted: !todo.isCompleted
		});
		// Update DOM
		todo.isCompleted = !todo.isCompleted;
	};
	

	//delete task
	function deleteTask($scope, todoToDelete) {
		_.remove($scope.todos, function(todo) {
  			return todo.task === todoToDelete.task 
  				&& todo.$$hashKey === todoToDelete.$$hashKey ; //ID
		});

		// DELETE request to db
		$http.delete('/todos/'+todoToDelete._id);
	};

	
	// watch input TASK
	function watchCreateTaskInput(params, $scope, val) {
		// if val - something exists in the box
		if (!val && params.createHasInput) {  //if text was deleted after typing in input box
			$scope.todos.pop() ;
			params.createHasInput = false;
		} else if (val && !params.createHasInput) { /*
					something exists in the box and 
					if something wasn't entered in createTaskInput (createHasInput = false) */

			var sev = $scope.createTaskSeverityInput;
			if (sev === undefined) {
				$scope.createTaskInput = '';
				console.log("Choose severity!!!");
			} else {
				$scope.todos.push({ 
						task: val, 
						isCompleted: false, 
						severity: $scope.createTaskSeverityInput
					});
				params.createHasInput = true;
			}

		} else if (val && params.createHasInput) { // if text exists in the box and text has been already added before - update 
			$scope.todos[$scope.todos.length - 1].severity = $scope.createTaskSeverityInput;
			$scope.todos[$scope.todos.length - 1].task = val; // update the last value of todos
		}
	};

	// watch input TASK SEV
	function watchCreateTaskSeverityInput(params, $scope, val) {
		if (val && params.createHasInput) {
			$scope.todos[$scope.todos.length - 1].severity = $scope.createTaskSeverityInput;
		}
		
	};


}



