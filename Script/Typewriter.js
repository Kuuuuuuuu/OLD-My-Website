let i = 0;
const txt = 'KohakuChan';
const speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('writer').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}