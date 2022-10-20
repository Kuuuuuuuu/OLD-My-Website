const clickElement = document.createElement("button");
const box = document.querySelector(".box");
const time = document.querySelector(".time");
const btn = document.querySelector(".btn");
let click = 0;
let sec = 10;
let Start = false;
let IntervalTick = 0;

clickElement.setAttribute("class", "box");
btn.style.display = "none";

setInterval(() => {
    IntervalTick++;
    time.innerHTML = `${sec} Seconds Left`;
    if (sec >= 0 && Start) {
        sec -= 1;
    } else if (sec < 0 && Start) {
        time.innerHTML = "Time over";
        box.style.display = "none";
        btn.style.display = "inline-block";
        btn.innerHTML = "Play again";
        time.style.display = "none";
        Start = false;
        clickElement.replaceWith(box); document.querySelector("h3").innerHTML = `Your click speed is ${click / 10} CPS<br>${click} clicks in 5 seconds `;
    }
}, 1000);

btn.addEventListener("click", function () {
    location.reload();
});

box.addEventListener('click', function () {
    if (!Start) {
        click = 0;
        Start = true;
    } else if (sec >= 0 && Start) {
        btn.style.display = "none";
        click += 1;
        document.querySelector("h3").innerHTML = `${click} Clicks`;
    }
});