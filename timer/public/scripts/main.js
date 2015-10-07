$( document ).ready(
  function () {
    var counter;
    var minute = 30;
    var second = 00;
    var secondKnob = $('.knob.second');
    var minuteKnob = $('.knob.minute');
    
    secondKnob.val(59);
    minuteKnob.val(60);

    function updateClock () {
      $('#minute').text(minute);
      minuteKnob.val(minute).trigger('change');
      if (second == 00 ) {
        $('#second').text("00");
        secondKnob.val(0).trigger('change');
      } else {
        $('#second').text(second);
        secondKnob.val(second).trigger('change');
      }
    }

    function addMinute () {
      if (minute < 60) {
        minute += 1
      } else {
        alert("The maximum amount of time you can set is 60 minutes");
      }
      second = 00;
      updateClock();
    }
    function takeMinute () {
      if (minute > 0) {
        minute -= 1
      } else {
        alert("The minmum amount of time you can set is 0 minutes");
      }
      second = 00;
      updateClock();
    }

    function timer () {
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

    function stopTimer () {
      clearInterval(counter);
    }

    function resetTimer () {
      second = 00;
      minute = 30;
      updateClock();
    }

    $('#start').on('click', function () {
      counter = setInterval(timer,1000);
    });
    $('#addMinute').on('click', addMinute);
    $('#takeMinute').on('click', takeMinute);
    $('#stop').on('click', stopTimer);
    $('#reset').on('click', resetTimer);
    secondKnob.knob({
                      'min':0,
                      'max':59,
                      'readOnly': true,
                      'height': 300,
                      'width': 300
                    });
    minuteKnob.knob({
                      'min':0,
                      'max':60,
                      'readOnly': true,
                      'height': 150,
                      'width': 150
                    });
  }
);