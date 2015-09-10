function sym(args) {
    var args = [args, ];
    var uniqueArr;
    var answer;
  
    for( var i = 1; i < arguments.length; i++){
      args.push(arguments[i]);
    }

    function getCommonVal(arr1, arr2){
      return arr1.filter(function(val, i){
        return arr2.indexOf(val) === -1;
      });
    };

    function getUniqueVal(arr){
      return arr.filter(function(val, i){
        return arr.indexOf(val) === i;
      });
    };

    uniqueArr = args.map(getUniqueVal);
  
    answer = uniqueArr.reduce(function(arr1, arr2){
      return getCommonVal(arr1, arr2).concat(getCommonVal(arr2, arr1));
    });
  
    return answer;
}
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])