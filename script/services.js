myApp.factory('getSomeData', function($http){
	
	var factory = {};

	factory.getContact = function(id){
		return $http.get('http://www.mocky.io/v2/55d218ee5733d7c41121e95d')
		// http://www.mocky.io/ Mock your HTTP responses to test your REST API

	}

	return factory;

})