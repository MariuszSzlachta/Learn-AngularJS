const myApp = angular.module('myModule', []);


const dataController = myApp.controller('dataController', $scope => {
  const employees = [
    {
      name: "Ben", dateOfBirth: new Date("November 23, 1980"),
      gender: "Male", salary: 55000.788
    },
    {
      name: "Sara", dateOfBirth: new Date("May 05, 1970"),
      gender: "Female", salary: 68000
    },
    {
      name: "Mark", dateOfBirth: new Date("August 15, 1974"),
      gender: "Male", salary: 57000
    },
    {
      name: "Pam", dateOfBirth: new Date("October 27, 1979"),
      gender: "Female", salary: 53000
    },
    {
      name: "Todd", dateOfBirth: new Date("December 30, 1983"),
      gender: "Male", salary: 60000
    }
  ];

  $scope.employees = employees;
  $scope.rowCount = 5;
  $scope.sortColumn = 'name'; // name is a default value I want to sort by
  $scope.reverseSort = 'false';
  $scope.sortData = columnName => {
    // reverse sorting the same column every click
    $scope.reverseSort = ($scope.sortColumn == columnName) ? !$scope.reverseSort : false;
    // sort by column that is clicked
    $scope.sortColumn = columnName;
  }
  // adding a class that displays proper arrow or does not add any class
  $scope.getSortClass = columnName => {
    if ($scope.sortColumn == columnName) {
      return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
    }
    return '';
  }
})