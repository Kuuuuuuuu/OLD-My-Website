var i = 0;
var txt = 'KohakuChan';
var speed = 50;
GlobalEventHandlers.onload = () => typeWriter(event);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
