var i = 0;
var txt = 'Complexity Network';
var speed = 50;
document.load = () => typeWriter(event);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewritter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
