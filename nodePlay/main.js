var fs = require( 'fs' );
var fileName = process.argv[2];

var file = fs.readFile( fileName, function( err, data ) {
  console.log( data.toString().split('\n').length -1 );
});