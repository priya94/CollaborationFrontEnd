
var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider) {
	  $routeProvider
	  
	  .when('/login', {
		    templateUrl : 'c_login/login.html',
		    controller  : 'LoginController'
		  })
		  
		  .when('/register', {
	    templateUrl : 'c_register/register.html',
	    controller  : 'RegisterController'
	  })
	  
	  .otherwise({redirectTo: '/'});
});