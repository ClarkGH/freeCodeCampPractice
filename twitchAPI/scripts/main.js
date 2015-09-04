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
  function getStreamInfo(stream, index){
    $.getJSON( url + "/streams/" + stream + "?client_id=" + token + "&callback=?" 
      ).success(function( data ) {
        if(data.stream === null) {
          // console.log("http://twitch.tv." + stream);
          // console.log(data._links.channel);
          // console.log(data._links.self);
          // '<a class="online" id="stream' + index + '" href= http://twitch.tv/' + stream + '>' + stream + ' is not currently online. </a>'

        } else {
          // console.log("http://twitch.tv." + stream);
          // console.log(data._links.channel);
          // console.log(data._links.self);
          // console.log(data.stream)
          // console.log(data.stream.url)x
          // console.log(data.stream.game);
          // console.log(data.stream.preview.small);
            // '<a class="online" id="stream' + index + '" href= http://twitch.tv/' + stream + '>' + data.stream.channel.display_name + ' is now playing : ' + data.stream.channel.game + '</a>'
        }
      });
  }

  function getStreams(){ 
    for (var i = 0; i < streamers.length; i++) {
      getStreamInfo(streamers[i], i);
    }
  }

  getStreams();
});