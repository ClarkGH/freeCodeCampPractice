$( document ).ready(
  function(){
    var minute = 25;
    var second = 00;
    var counter = setInterval(timer, 1000);

    function updateClock() {
      $('#minute').text(minute);
      $('#second').text(second);
    }

    function addMinute() {
      if (minute <= 60) {
        minute += 1
      } else {
        alert("The maximum amount of time you can set is 60 minutes");
      }
      second = 00;
      updateClock();
    }
    function takeMinute() {
      if (minute >= 00) {
        minute -= 1
      } else {
        alert("The minmum amount of time you can set is 0 minutes");
      }
      second = 00;
      updateClock();
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
            updateClock();
            return
          default:
            second -= 1;
            updateClock();
        }
      }
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
    $('#addMinute').on('click', addMinute);
    $('#takeMinute').on('click', takeMinute);
    $('#stop').on('click', stopTimer);
    $('#reset').on('click', resetTimer);

  }
);