var myApp = angular.module('myApp', []);

myApp.controller('controller1', ['$scope', function ( $scope ) {
  $scope.price = 13.01;

  $scope.friends = [
    {
      name: 'Bilbo',
      phone: '123-1224'
    },
    {
      name: 'Jerry',
      phone: '213-2321'
    },
    {
      name: 'Bilbo',
      phone: '213-1332'
    },
    {
      name: 'Bilbo',
      phone: '321-3312'
    }
  ];
  
}]);