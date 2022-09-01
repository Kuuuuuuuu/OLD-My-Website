let Typewriter = 0;
const txt = "Kuuuuuuuu";
const txts = "Social";

function applyCursorRippleEffect(t) {
    const e = document.createElement("div");
    e.className = "ripple", document.body.appendChild(e), e.style.left = t.clientX + "px", e.style.top = t.clientY + "px", e.style.animation = "ripple-effect .4s  linear", e.onanimationend = () => {
        document.body.removeChild(e)
    }
}

document.onclick = () => applyCursorRippleEffect(event);
try {
    const c = document.body.getElementsByTagName("*");
    for (let t of c) t.onclick = t => t.stopPropagationw()
} catch (t) {
    console.log(t)
}

function typeWriter() {
    const words = ["Kuuuuuuuu", "Nayuki"];
    const len = words.length;
    let i = 0;
    let offset = 0;
    let forwards = true;
    let skip_count = 0;
    setInterval(() => {
        if (forwards) {
            if (offset >= words[i].length) {
                skip_count++;
                if (skip_count === 20) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else if (offset === 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
                i = 0;
            }
        }
        if (skip_count === 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        document.getElementById("Main-Text").innerHTML = words[i].substring(0, offset) + "!";
    }, 80);
}

function fetchgithubdata() {
    setTimeout(() => {
        fetch("https://api.github.com/users/Kuuuuuuuu").then(t => {
            t.json().then(t => {
                document.getElementById("count").innerHTML = `My Github Stats <br>Followers: ${t.followers}<br>Following: ${t.following}<br>Public Repos: ${t.public_repos}`
            });
        });
    }, 100);
}
