const clickElement = document.createElement("div");
const box = document.querySelector(".box");
const time = document.querySelector(".time");
const cps = document.querySelector(".cps");
const btn = document.querySelector(".btn");
var click = 0;
var sec = 5.5;

clickElement.setAttribute("class","box");
btn.style.display = "none";

function loop() {
  setInterval(() => {
    if(sec !== 0) {
       let after = sec - 0.5;
       sec = after;
    } else if(sec == 0) {
      time.innerHTML = "Time over";
      box.style.display = "none";
      btn.style.display = "inline-block";
      btn.innerHTML = "Play again";
      btn.addEventListener("click",function(){ location.reload(); })
      time.style.display = "none";
      document.querySelector("h1").innerHTML = `Your click speed is ${click/5} CPS<br>${click} clicks in 5 seconds `;
      clickElement.replaceWith(box);
     }
   }, 450);
 }

 function stopwatch(){
   loop();
   if(sec == 5.5 || sec == 10.5) {
      click = 0;
   }
   setInterval(() => {
     time.innerHTML = `${sec} Seconds Left`;
   }, 1);
 }
 
 function addClick(){
   click++;
   document.querySelector("h1").innerHTML = `Your click speed is ${click/5} CPS<br>${click} Clicks`;
 }

 cps.addEventListener('click',function(){
   if(sec == 5.5) {
      sec = 10.5;
      document.querySelector("h2").innerHTML = `Now set to 10 Seconds`;
   } else {
      sec = 5.5;
      document.querySelector("h2").innerHTML = `Now set to 5 seconds`;
   }
 })

 box.addEventListener('click',function(){
    stopwatch();
    box.replaceWith(clickElement);
    btn.style.display = "none";
    clickElement.addEventListener('click',function(){ addClick(); })
})
//Nah please not use this code it bug he
