// XMLHttpRequest (JSObject objParameters);
// need a server for this to run properly
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    document.getElementById('ajax').innerHTML = xhr.responseText;
  }
};

xhr.open('GET', 'crabby_patty.html');
function sendAJAX() {
  xhr.send();
  document.getElementById('load').style.display = "none";
}