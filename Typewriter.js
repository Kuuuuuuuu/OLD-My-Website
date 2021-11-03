var i = 0;
var txt = 'KohakuChan';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('witter').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
