let Typewriter = 0;
const txt = "Kuuuuuuuu";
const txts = "Social";

function applyCursorRippleEffect(t) {
    const e = document.createElement("div");
    e.className = "ripple", document.body.appendChild(e), e.style.left = t.clientX + "px", e.style.top = t.clientY + "px", e.style.animation = "ripple-effect .4s  linear", e.onanimationend = () => {
        document.body.removeChild(e)
    }
}

document.addEventListener('click', applyCursorRippleEffect);
try {
    const c = document.body.getElementsByTagName("*");
    for (let t of c) t.onclick = t => t.stopPropagationw();
} catch (t) {
    console.log(t);
}

function fetchgithubdata() {
    setTimeout(() => {
        fetch("https://api.github.com/users/Kuuuuuuuu").then(t => {
            t.json().then(t => {
                document.querySelector(".Github-Stats").innerHTML = `My Github Stats <br>Followers: ${t.followers}<br>Following: ${t.following}<br>Public Repos: ${t.public_repos}`;
            });
        });
    }, 300);
}
