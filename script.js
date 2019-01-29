const myApp = angular.module('myModule', []);

const myController = myApp.controller("myController", function($scope){
  $scope.message = 'AngularJS tutorial';
  console.log($scope.message)
})