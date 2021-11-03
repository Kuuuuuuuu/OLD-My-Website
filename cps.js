let box = document.querySelector(".box");
let time = document.querySelector(".time");
let clicks = document.querySelector(".clicks");
let click = 0;
let sec = 10;

let clickElement = document.createElement("div");
clickElement.setAttribute("class","box");

let btn = document.querySelector(".btn");
btn.style.display = "none";

function loop() {
  setInterval(() => {
    if(sec !== 0) {
       sec--;
    } else {
      time.innerHTML = "Time over";
      box.style.display = "none";
      btn.style.display = "inline-block";
      btn.innerHTML = "Play again";
      btn.addEventListener("click",function(){ location.reload(); })
      time.style.display = "none";
      clicks.innerHTML = "";
      document.querySelector("h1").innerHTML = `Your click speed is ${click/5} CPS<br>${click} clicks in 5 seconds `;
      clickElement.replaceWith(box);
      click = 0;
      sec = 10;
     }
  }, 1000);
}

function stopwatch(){
  if(sec == 10) {
     loop();
  }
  setInterval(() => {
    time.innerHTML = "${sec} Seconds Left";
  }, 1000);
}

box.addEventListener('click',function(){
    stopwatch();
    click = 1;
    clicks.innerHTML = click;
    box.replaceWith(clickElement);
    btn.style.display = "none";
    click = 0;
    clickElement.addEventListener('click',function(){
       document.querySelector("h1").innerHTML = `Your click speed is ${click/5} CPS<br>${click} Clicks`;
       click++;
       clicks.innerHTML = click;
    })
})
