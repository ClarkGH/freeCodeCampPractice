// function complement(A, B) {
//     return A.filter(function(elem) { return B.indexOf(elem) == -1; });
// }

// function unique(arr) {
//   return arr.filter(function(elem, pos) {
//     return arr.indexOf(elem) == pos;
//   });
// }

function sym(args) {
    var args = [args, ];
    for( var i = 1; i < arguments.length; i++){
      args.push(arguments[i]);
    }

    // var args = [].slice.call(arguments); is the same thing as the above 4 lines;

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



    // return arg.map(unique).reduce(function(previous, current) {
        // return complement(previous, current).concat(complement(current, previous)); });
}

sym([1, 2, 3],[5, 2, 1, 4]);
