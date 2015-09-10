$(document).ready(function( ) {

  function setWeather(temperature){
    $(".current-weather").text("It is currently " + temperature + " degrees fahrenheit where you are.")
  }

  function getWeather(location) {
    var latitude = location[0];
    var longitude = location[1];
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=imperial";

    $.get( url, function( data ){
      var temperature = data.main.temp;
      setWeather(temperature);
    }, "json" );
  }

  function findLocation( ) {
    $.get("http://ipinfo.io", function( data ){
      var location = data.loc.split( "," );
      getWeather(location);
    }, "json");
  }

  findLocation();

});
