let i = 0;
const txt = 'KohakuChan';
const txt2 = 'Social Infos';
const speed = 100;

// actually this is lazy coding
// but I'm too lazy to make a new function

function SocialWriter() {
    if (i < txt2.length) {
        document.getElementById('writer2').innerHTML += txt2.charAt(i);
        i++;
        setTimeout(SocialWriter, speed);
    }
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('writer').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}