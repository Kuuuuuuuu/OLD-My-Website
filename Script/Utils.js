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

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && (event.key === "S" || event.key === "s")) {
        event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "C" || event.key === "c")) {
        event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "E" || event.key === "e")) {
        event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "I" || event.key === "i")) {
        event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "K" || event.key === "k")) {
        event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "U" || event.key === "u")) {
        event.preventDefault();
    }
    if (event.key.includes("F12")) {
        event.preventDefault();
    }
});