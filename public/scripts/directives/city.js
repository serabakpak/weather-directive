

angular.module('weatherApp')
	.directive('cityDirective', cityDirective);
	


function cityDirective() {
	var directive = {
		restrict: 'E',	
		templateUrl: './templates/city-directive.html',
		replace: true,
		scope: {
			 
			data: '='
			
		},
		controllerAs: 'cityCtrl',
		controller: ['$http', function ($http) {
						var vm = this;
						vm.test = 'this is a test';
						vm.city = 'San Francisco';
						
						vm.getWeather = function() {
							vm.modifiedCity = vm.city.toLowerCase().replace(' ','+');
							$http({
						    	method: 'GET',
						   		url: 'http://api.openweathermap.org/data/2.5/weather?q='+ vm.modifiedCity+'&APPID=c51dfe23e4076c20ae0a044c49d36736'
						  	}).then(function successCallback(response) {
						    	console.log(response.data);

						    	vm.data = response.data;
						 	}, function errorCallback(response) {
						 		console.log('There was an error getting the data', response);
						 	});
						 }

					}]
		};
	return directive;
};





