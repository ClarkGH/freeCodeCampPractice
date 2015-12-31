var myApp = angular.module('myApp', []);

var months = [
  {
      "name": "January",
      "ordinal": 1,
      "season": "winter",
      "quote": "No one's ever achieved financial fitness with a January resolution that's abandoned by February."
  },

  {
      "name": "February",
      "ordinal": 2,
      "season": "winter",
      "quote": "February is always a bad month for TV sports. Football is gone, basketball is plodding along in the annual midseason doldrums, and baseball is not even mentioned."
  },

  {
      "name": "March",
      "ordinal": 3,
      "season": "spring",
      "quote": "It was one of those March days when the sun shines hot and the wind blows cold: when it is summer in the light, and winter in the shade."
  },

  {
      "name": "April",
      "ordinal": 4,
      "season": "spring",
      "quote": "The air soft as that of Seville in April, and so fragrant that it was delicious to breathe it."
  },

  {
      "name": "May",
      "ordinal": 5,
      "season": "spring",
      "quote": "The world's favorite season is the spring. All things seem possible in May."
  },

  {
      "name": "June",
      "ordinal": 6,
      "season": "summer",
      "quote": "If a June night could talk, it would probably boast it invented romance."
  },
  {
      "name": "July",
      "ordinal": 7,
      "season": "summer",
      "quote": "Kiss is a Fourth of July fireworks show with a backbeat."
  },
  {
      "name": "August",
      "ordinal": 8,
      "season": "summer",
      "quote": "August brings into sharp focus and a furious boil everything I've been listening to in the late spring and summer."
  },
  
  {
      "name": "September",
      "ordinal": 9,
      "season": "fall",
      "quote": "My favourite poem is the one that starts 'Thirty days hath September' because it actually tells you something."
  },

  {
      "name": "October",
      "ordinal": 10,
      "season": "fall",
      "quote": "October is the fallen leaf, but it is also a wider horizon more clearly seen. It is the distant hills once more in sight, and the enduring constellations above them once again."
  },

  {
      "name": "November",
      "ordinal": 11,
      "season": "fall",
      "quote": "The month of November makes me feel that life is passing more quickly. In an effort to slow it down, I try to fill the hours more meaningfully."
  },

  {
      "name": "December",
      "ordinal": 12,
      "season": "winter",
      "quote": "Through the small tall bathroom window the December yard is gray and scratchy, the tree calligraphic."
  }
];


myApp.controller('testController', ['$scope', function ( $scope ) {
  $scope.price = 12.50;
}]);

