var myApp = angular.module('myApp', []);

myApp.controller('testController', ['$scope', function ( $scope ) {
  console.log('hello world');
}]);