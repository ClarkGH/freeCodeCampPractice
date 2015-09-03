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
        if(data.stream === null) {
          console.log(data);
          console.log(data._links.channel);
          console.log(data._links.self);
        } else {
          console.log(data._links.channel);
          console.log(data._links.self);
          console.log(data.stream.game);
          console.log(data.stream.preview.small);
        }
      });
  }

  getStream( streamers[2] );
});