$( document ).ready(
  function(){
    var minute = 25;
    var second = 00;

    var counter = setInterval(timer, 1000);

    function timer() {
      if (minute == 0 && second == 0) {
        clearInterval(counter);
        alert('Time is up.');
        return;
      } else {
        switch(second) {
          case 00:
            second = 59;
            minute -= 1;
          default:
            second -= 1;
        }
      }
      $('#minute').text(minute);
      $('#second').text(second);
    }

    function stopTimer() {
      clearInterval(counter);
    }

    $('#start').on('click', function(){
      counter = setInterval(timer,1000);
    });
    $('#stop').on('click', stopTimer);
  }
);