 // Module
//ngRoute - services
 var todoapp = angular.module('todoapp', ['ngRoute', 'ngResource']);


//routes
todoapp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {			
			templateUrl: 'pages/homepage/homepage.html',
			controller: 'homePageCtrl'
		})
		.when('/todos', {
			templateUrl: 'pages/todopage/todopage.html',
			controller: 'todoPageCtrl'
		})		
});

//services

todoapp.service('todoService', function() {
	this.name = "NAME NAME";
});

/**/
/*
todoapp.controller('todoPageCtrl',['$scope', 'todoService', function($scope, todoService) {
	$scope.name = todoService.name;
}]);
*/