var myApp = angular.module('myApp', []);

myApp.controller('controller1', ['$scope', function ( $scope ) {
  $scope.price = 13.01;
}]);