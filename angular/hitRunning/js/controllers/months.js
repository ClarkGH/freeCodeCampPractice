var myApp = angular.module('myApp', []);

myApp.filter('rearrange', function() {
  return function (input) {
    input = input.split(' ');

    var currentIndex = input.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = input[currentIndex];
      input[currentIndex] = input[randomIndex];
      input[randomIndex] = temporaryValue;
    }

    return input.join(' '); 
  };
});

myApp.filter('doesIt', function () {
  return function (input) {

    input = input.split(' ');

    for (var i = 0; i < input.length; i++) {
      input[i] = input[i] + (' does it?')
    }

    return input.join(' ');
  };
});

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
      name: 'Frodo',
      phone: '213-1332'
    },
    {
      name: 'Hobo',
      phone: '321-3312'
    }
  ];


}]);