var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
console.log("Hello World from controller");


p1 = {
	name: 'Abc',
	email: 'xyz',
	number: '111111111'
};

p2 = {
	name: 'def',
	email: 'xyz',
	number: '111111111'
};
p3 = {
	name: 'ghi',
	email: 'xyz',
	number: '111111111'
};

	var contactlist = [p1, p2, p3];
	$scope.contactlist=contactlist;
}]);﻿