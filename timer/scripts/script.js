$( document ).ready(
  function(){
    var minute = 25;
    var second = 00;

    var counter = setInterval(timer, 1000);

    function timer (){
      if (minute == 0 && second == 0) {
        clearInterval(counter);
        alert('Time is up.');
        return
      } else {
        console.log("hi")
      }
    }



    $('#minute').text(minute);
    $('#second').text(second);
  }
);