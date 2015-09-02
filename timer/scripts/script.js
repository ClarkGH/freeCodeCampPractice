$( document ).ready(
  function(){
    
    function startTimer(){
      setInterval(function(){
        console.log("hi");
      }, 1000);
    }
    
    function stopTimer(){
      clearInterval(startTimer);
    }
    
    $('#start').on('click', startTimer);
    $('#stop').on('click', stopTimer);
  }
);