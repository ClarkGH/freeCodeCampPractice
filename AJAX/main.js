// XMLHttpRequest (JSObject objParameters);
var xhr = new XMLHttpRequest();

function reqListener() {
  console.log(this.responseText);
}

xhr.addEventListener("load", reqListener);
xhr.open("GET", "http://www.example.org/example.txt", true);
xhr.send()