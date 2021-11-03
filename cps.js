const clickElement = document.createElement("div");
const box = document.querySelector(".box");
const time = document.querySelector(".time");
const btn = document.querySelector(".btn");
var click = 0;
var sec = 5;

clickElement.setAttribute("class","box");
btn.style.display = "none";

function loop() {
  setInterval(() => {
    if(sec !== 0) {
       sec--;
    } else if(sec == 0) {
      time.innerHTML = "Time over";
      box.style.display = "none";
      btn.style.display = "inline-block";
      btn.innerHTML = "Play again";
      btn.addEventListener("click",function(){ location.reload(); })
      time.style.display = "none";
      document.querySelector("h1").innerHTML = `Your click speed is ${click/5} CPS<br>${click} clicks in 5 seconds `;
      clickElement.replaceWith(box);
      click = 0;
      sec = 5;
     }
   }, 900);
 }

 function stopwatch(){
   loop();
   setInterval(() => {
     time.innerHTML = `${sec} Seconds Left`;
     if(sec !== 0) {
        document.querySelector("h1").innerHTML = `Your click speed is ${click/5} CPS<br>${click} Clicks`;
     }
   }, 1);
 }

 box.addEventListener('click',function(){
    stopwatch();
    box.replaceWith(clickElement);
    btn.style.display = "none";
    clickElement.addEventListener('click',function(){ click++; })
})
//Nah please not use this code it bug he
