const clickElement = document.createElement("button");
const box = document.querySelector(".box");
const time = document.querySelector(".time");
const btn = document.querySelector(".btn");
let click = 0;
let sec = 5.5;
let Start = false;
clickElement.setAttribute("class", "box");
btn.style.display = "none";

(function () {
    setInterval(() => {
        if (sec >= 0 && Start === true) {
            sec -= 0.12;
            time.innerHTML = `${Math.floor(sec)} Seconds Left`;
        }
        if (sec < 0) {
            time.innerHTML = "Time over";
            box.style.display = "none";
            btn.style.display = "inline-block";
            btn.innerHTML = "Play again";
            btn.addEventListener("click", function () {
                location.reload();
            });
            time.style.display = "none";
            /*if (message === 0) {
                sendMessage();
                message++;
            }*/
            Start = false;
            document.querySelector("h3").innerHTML = `Your click speed is ${click / 5} CPS<br>${click} clicks in 5 seconds `;
            clickElement.replaceWith(box);
        }
    }, 100);
})();

box.addEventListener('click', function () {
    if (sec === 5.5 && Start === false) {
        click = 0;
        Start = true;
    }
    if (sec > 0) {
        btn.style.display = "none";
        click++;
        document.querySelector("h3").innerHTML = `Your click speed is ${click / 5} CPS<br>${click} Clicks`;
    }
});