let Typewriter = 0;
const txt = 'KohakuChan';
const txts = 'Social Account';

document.onclick = () => applyCursorRippleEffect(event);

function applyCursorRippleEffect(e) {
    const ripple = document.createElement("div");

    ripple.className = "ripple";
    document.body.appendChild(ripple);

    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    ripple.style.animation = `ripple-effect .4s  linear`;
    ripple.onanimationend = () => {
        document.body.removeChild(ripple);
    }
}

const all = document.body.getElementsByTagName("*");
for (let i = 0; i < all.length; ++i) {
    all[i].onclick = (event) => event.stopPropagation();
}

function typeWriter() {
    if (Typewriter !== txt.length) {
        document.getElementById('writer').innerHTML += txt.charAt(Typewriter);
        Typewriter++;
        setTimeout(typeWriter, 95);
        return;
    }
    if (Typewriter !== txts.length) {
        document.getElementById('hmm').innerHTML += txts.charAt(Typewriter);
        Typewriter++;
        setTimeout(typeWriter, 95);
        return;
    }
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('text').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    ;
    return i;
}