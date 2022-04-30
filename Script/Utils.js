let Typewriter = 0;
const txt = 'Kuuuuuuuu';
const txts = 'Social';
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

try {
    const all = document.body.getElementsByTagName("*");
    for (let i = 0; i < all.length; ++i) {
        all[i].onclick = (event) => event.stopPropagation();
    }
} catch (e) {
    console.log(e);
}

function typeWriter() {
    try {
        if (Typewriter < txt.length) {
            document.getElementById('writer').innerHTML += txt.charAt(Typewriter);
            Typewriter++;
            setTimeout(typeWriter, 95);
        }
    } catch (e) { // bypass hehe genius
        try {
            if (Typewriter < txts.length) {
                document.getElementById('hmm').innerHTML += txts.charAt(Typewriter);
                Typewriter++;
                setTimeout(typeWriter, 95);
            }
        } catch (e) {
            return false;
        }
    }
}


function fetchmember() {
    setTimeout(() => {
        fetch('https://ptb.discord.com/api/guilds/887683619181707276/widget.json').then(response => {
            response.json().then(data => {
                console.log(data);
                return document.getElementById('count').innerHTML = `Retro Community Online: ${data.presence_count} Members`;
            });
        })
    }, 1000);
}

setInterval(() => {
    console.log(`ส่องทำควยไร https://github.com/Kuuuuuuuu          #${Math.random()}${Math.random() * 1000}`);
}, 100)
