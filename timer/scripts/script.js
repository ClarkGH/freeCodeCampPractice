$( document ).ready(
  function(){
    var refreshIntervalId = function() {
      setInterval(function(){
        console.log('hi');
      }, 1000);
    }

    $('#start').on('click', refreshIntervalId);
    $('#stop').on('click', clearInterval(refreshIntervalId));
  }
);