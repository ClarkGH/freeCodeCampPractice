$( document ).ready( function() {
  var token = key.clientID; //saved in another file
  var url = "https://api.twitch.tv/kraken";
  var streamers = [
                    "demolisho", 
                    "boogie2988", 
                    "freecodecamp", 
                    "storbeck", 
                    "terakilobyte", 
                    "habathcx",
                    "RobotCaleb",
                    "thomasballinger",
                    "noobs2ninjas",
                    "beohoff"]
  function getStream(stream){
    $.getJSON( url + "/streams/" + stream + "?client_id=" + token + "&callback=?" 
      ).success(function( data ) {
        console.log(data);
      });
  }

  getStream( streamers[2] );
});