//Api Key: 78924cb5c89d8f7916f39a9c73145bc9

$(document).ready(function( ) {
  $.getJSON("http://ipinfo.io/json", function( data ){
    var location = data.loc;
    console.log(location);
  });
});