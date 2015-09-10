function sym(args) {
    var args = [args, ];
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

    return args.map(getUniqueVal).reduce(function(arr1, arr2){
      return getCommonVal(arr1, arr2).concat(getCommonVal(arr2, arr1));
    });
}

sym([1, 2, 3],[5, 2, 1, 4]);