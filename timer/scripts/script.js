$( document ).ready(
  function(){
    var minute = 25;
    var second = 00;
    var counter = setInterval(timer, 1000);

    function updateClock() {
      $('#minute').text(minute);
      $('#second').text(second);
    }

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
      updateClock();
    }

    function stopTimer() {
      clearInterval(counter);
    }

    function resetTimer() {
      second = 00;
      minute = 25;
      updateClock();
    }

    $('#start').on('click', function(){
      counter = setInterval(timer,1000);
    });
    $('#stop').on('click', stopTimer);
    $('#reset').on('click', resetTimer);
  }
);