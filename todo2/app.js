angular.module('toDoApp', [])

.controller('toDoCtrl', function($scope) {
  $scope.newTodo= {};

  $scope.toDos = [
      {text: "Get some rest", done: false},
  ];

  $scope.addToDo = function() {
        $scope.toDos.push($scope.newToDo);
        $scope.newToDo = {};

  };

});
