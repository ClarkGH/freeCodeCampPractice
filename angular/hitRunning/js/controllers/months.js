var myApp = angular.module('myApp', []);

myApp.controller('controller1', ['$scope', function ( $scope ) {
  $scope.bacon = "bacon";
}]);

myApp.controller('controller2', ['$scope', function ( $scope ) {
  $scope.ham = "ham";
}]);
