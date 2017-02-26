
angular.module('todoapp')
	.controller('todoPageCtrl', 
		['$scope','todoPageFactory', function($scope, todoPageFactory) {
	// variable just make a copy , object pass object directly
	var params = {
		createHasInput: false // if something was entered in createTaskInput
	};	

	todoPageFactory.getTodos($scope);

	$scope.onEditClick = function(todo) {
		todo.isEditing = true;
		//initicalising input box with value from todo.task
		todo.updatedTask = todo.task;
	};

	$scope.onCancelClick = function(todo) {
		todo.isEditing = false;
	};

	//$scope.createTask = todoPageFactory.createTask.bind(this, $scope, params); //without lodash
	$scope.createTask = _.partial(todoPageFactory.createTask, $scope, params); // _.partial -  lodash function
	$scope.updateTask = _.partial(todoPageFactory.updateTask); // no need to specify parameters
	$scope.changeStatus = _.partial(todoPageFactory.changeStatus);
	$scope.deleteTask = _.partial(todoPageFactory.deleteTask, $scope);
	$scope.$watch('createTaskInput', _.partial(todoPageFactory.watchCreateTaskInput, params, $scope));
	$scope.$watch('createTaskSeverityInput', _.partial(todoPageFactory.watchCreateTaskSeverityInput,params, $scope));
	
}]);