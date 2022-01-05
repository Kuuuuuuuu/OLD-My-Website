let i = 0;
const txt = 'KohakuChan';
let bruh = true;

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
    if (i !== txt.length && bruh == true) {
        document.getElementById('writer').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
    if (i > 1 && bruh == true) {
        bruh = false;
        i--;
        setTimeout(typeWriter, 150);
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