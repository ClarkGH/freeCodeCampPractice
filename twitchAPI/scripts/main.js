$( document ).ready( function() {
  var token = key.clientID; //saved in another file
  var url = "https://api.twitch.tv/kraken";
  var streamers = [
                    "demolisho", 
                    "boogie2988",
                    "medrybw", 
                    "freecodecamp", 
                    "storbeck", 
                    "terakilobyte", 
                    "habathcx",
                    "RobotCaleb",
                    "thomasballinger",
                    "noobs2ninjas",
                    "beohoff"]
  function getStream(stream){
    var isStreaming = false;

    $.getJSON( url + "/streams/" + stream + "?client_id=" + token + "&callback=?" 
      ).success(function( data ) {
        if(data.stream === null) {
          console.log("http://twitch.tv." + stream);
          console.log(data._links.channel);
          console.log(data._links.self);
        } else {
          isStreaming = true;
          console.log("http://twitch.tv." + stream);
          // console.log(data._links.channel);
          // console.log(data._links.self);
          console.log(data.stream) //this will be null since there is no streaming ongoing
          // console.log(data.stream.url)
          // console.log(data.stream.game);
          // console.log(data.stream.preview.small);
          $('.isStreaming').html('<a href= http://twitch.tv/' + stream + '>Google</a>');
        }

      });
  }

  getStream( streamers[2] );
});