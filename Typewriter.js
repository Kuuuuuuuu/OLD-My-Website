var i = 0;
var txt = 'KohakuChan';
var speed = 20;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('writer').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
