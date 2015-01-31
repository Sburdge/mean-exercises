angular.module('app', [])
.controller('test', function($scope) {
	$scope.array = [
		{ name: 'Josh', age: 65},
		{ name: 'Derek', age: 22},
		{ name: 'Sariah', age: 22},
		{ name: 'Joe', age: 27},
		{ name: 'Mark', age: 22},
		{ name: 'Robert', age: 84},
];
	$scope.show =true;
	$scope.hide=true
	$scope.show=function(person) {
		return person.age > 25;
	};
});
