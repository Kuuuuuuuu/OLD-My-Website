let Typewriter = 0;
const txt = 'KohakuChan';
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

const all = document.body.getElementsByTagName("*");
for (let i = 0; i < all.length; ++i) {
    all[i].onclick = (event) => event.stopPropagation();
}

function typeWriter() {
    try {
        if (Typewriter < txt.length) {
            document.getElementById('writer').innerHTML += txt.charAt(Typewriter);
            Typewriter++;
            setTimeout(typeWriter, 95);
        }
    } catch (e) { // bypass hehe genius
        if (Typewriter < txts.length) {
            document.getElementById('hmm').innerHTML += txts.charAt(Typewriter);
            Typewriter++;
            setTimeout(typeWriter, 95);
        }
    }
}


function fetchmember() {
    fetch('https://ptb.discord.com/api/guilds/887683619181707276/widget.json').then(response => {
        response.json().then(data => {
            console.log(data);
            return document.getElementById('count').innerHTML = `Retro Community Online: ${data.presence_count} Members`;
        });
    })
}

setInterval(() => {
    console.log(`ส่องทำควยไร https://github.com/KohakuChanX          #${Math.random()}${Math.random() * 1000}`);
}, 100)

/*function Dashboard() {
    try {
        fetch('https://ba5e-2405-9800-b921-503b-425-342e-a917-c7d0.ap.ngrok.io/', {
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(response => {
            response.json().then(data => {
                console.log(data);
                return document.getElementById('dashboard').innerHTML = `Retro Community Status: Member: ${data.verify.all} / Bots: ${data.verify.bot} / Verify Count: ${data.verify.verify} / Not Verify Count: ${data.verify.notverify}`;
            });
        })
    } catch (e) {
        return  document.getElementById('dashboard').innerHTML = `Retro Community Status: Rest API error`;
    }
}*/

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
    return i;
}
