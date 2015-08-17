// create the module and name it scotchApp
        // also include ngRoute for all our routing needs
var myApp = angular.module('myApp',['ngRoute']);


// Configure Routing

myApp.config(function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl:'pages/home.html',
		controller:'mainController'
	})
	.when('/about', {
		templateUrl:'pages/about.html',
		controller:'aboutController'

	})
	.when('/contact',{
		templateUrl:'pages/contact.html',
		controller:'contactController'
	});

});


// Controllers for each route


	myApp.controller('mainController', function($scope, getSomeData){

		getSomeData.getContact().success(function(games){
			$scope.games = games;
		});

		$scope.message = 'Do not go where the path may lead, go instead where there is no path and leave a trail.';


	});

	myApp.controller('aboutController', function($scope){

		$scope.message = "We are made wise not by the recollection of our past, but by the responsibility for our future.";
	});

	myApp.controller('contactController', function($scope){
		$scope.message = 'If youre trying to achieve, there will be roadblocks. Ive had them; everybody has had them. But obstacles dont have to stop you. If you run into a wall, dont turn around and give up. Figure out how to climb it, go through it, or work around it.';
	});