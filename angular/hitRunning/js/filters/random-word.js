angular.module('randomWordFilters', []).filter('rearrange', function() {
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