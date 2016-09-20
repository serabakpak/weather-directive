angular.module('weatherApp')
  .controller('cityController', cityController);

function cityController() {
	var vm = this;
	vm.test = 'this is a test';
	vm.city = 'San Francisco';
}