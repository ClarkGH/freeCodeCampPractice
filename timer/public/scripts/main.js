$( document ).ready(
  function () {
    var counter;
    var minute = 30;
    var second = 00;
    var secondKnob = $('.knob.second');
    var minuteKnob = $('.knob.minute');
    
    secondKnob.val(30);
    minuteKnob.val(30);

    function updateClock () {
      $('#minute').text(minute);
      minuteKnob.val(minute).trigger('change');
      if (second == 00 ) {
        secondKnob.val(0).trigger('change');
      } else {
        secondKnob.val(second).trigger('change');
      }
    }

    function addMinute () {
      if (minute < 60) {
        minute += 1
      } else {
        alert("The maximum amount of time you can set is 60 minutes");
      }
      updateClock();
    }
    function takeMinute () {
      if (minute > 0) {
        minute -= 1
      } else {
        alert("The minmum amount of time you can set is 0 minutes");
      }
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
      second = 59;
      minute = 29;
      updateClock();
    }


    $('#reset').on('click', resetTimer);
    secondKnob.knob({
                      'min':0,
                      'max':59,
                      'readOnly': true,
                      'height': 300,
                      'width': 300
                    }
    );

    minuteKnob.knob({
                      'min':0,
                      'max':60,
                      'readOnly': true,
                      'height': 150,
                      'width': 150
                    }
    );

    $(document).on('click', '.play', function () {
      if (counter) {
        stopTimer();
      }
      counter = setInterval(timer,1000);
      $('.action').removeClass('play');
      $('.action').addClass('pause');
    });

    $(document).on('click', '.pause', function () {
      stopTimer();
      $('.action').removeClass('pause');
      $('.action').addClass('play');
    });


    $('.addMinute').on('click', addMinute);
    $('#takeMinute').on('click', takeMinute);
  }
);