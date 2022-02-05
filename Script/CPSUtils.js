const clickElement = document.createElement("button");
const box = document.querySelector(".box");
const time = document.querySelector(".time");
const btn = document.querySelector(".btn");
const link = "nothing here only fake webhook are here";
let click = 0;
let sec = 5.5;
let message = 0;
let Start = false;
let i = 0;

clickElement.setAttribute("class", "box");
btn.style.display = "none";

/*function sendMessage() {
    let val;
    const urlBox = document.getElementById("url");
    const includes = ["@everyone", "@here"];
    if (urlBox.value === null || urlBox.value.includes(includes)) {
        val = "Unknown Username";
    } else {
        val = urlBox.value;
    }
    const request = new XMLHttpRequest();
    request.open("POST", link);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        username: "https://kohakuChan.my.to/cps",
        avatar_url: "",
        content: `[${val}] - got clicks ${click} & CPS ${click / hee} in 5 Seconds`
    }
    request.send(JSON.stringify(params));
}*/

(function () {
    setInterval(() => {
        const timeboard = setInterval(() => {
            time.innerHTML = `${sec} Seconds Left`;
        }, 100);
        if (sec > 0 && Start === true) {
            sec = sec - 0.5;
        }
        if (sec === 0) {
            clearInterval(timeboard);
            time.innerHTML = "Time over";
            box.style.display = "none";
            btn.style.display = "inline-block";
            btn.innerHTML = "Play again";
            btn.addEventListener("click", function () {
                location.reload();
            })
            time.style.display = "none";
            if (message === 0) {
                //sendMessage();
                message++;
            }
            i = 0;
            Start = false;
            document.querySelector("h3").innerHTML = `Your click speed is ${click / 5} CPS<br>${click} clicks in 5 seconds `;
            clickElement.replaceWith(box);
        }
    }, 450);
})()

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