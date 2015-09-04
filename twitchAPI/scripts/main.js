$( document ).ready( function() {
  var token = key.clientID; //saved in another file
  var url = "https://api.twitch.tv/kraken";
  var streamer = "freeCodeCamp"
  
  function getStreamInfo(stream, index){
    $.getJSON( url + "/streams/" + stream + "?client_id=" + token + "&callback=?" 
      ).success(function( data ) {
        if(data.stream === null) {
          $('.isStreaming').html('<a class="online" id="stream' + index + '" href= http://twitch.tv/' + stream + '>' + stream + ' is not currently online. </a>')

        } else {
          $('.isStreaming').html('<a class="online" id="stream' + index + '" href= http://twitch.tv/' + stream + '>' + data.stream.channel.display_name + ' is now playing : ' + data.stream.channel.game + '</a>')
        }
      });
  }

  getStreamInfo("freeCodeCamp");
});