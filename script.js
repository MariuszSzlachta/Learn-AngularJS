const myApp = angular.module('myModule', []);

const imageController = myApp.controller('imageController', function($scope){
  const image = {
    name: 'placeholder',
    url: '/pic.png'
  }
  $scope.image = image;
})