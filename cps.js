const clickElement = document.createElement("div");
const box = document.querySelector(".box");
const time = document.querySelector(".time");
const cps = document.querySelector(".cps");
const btn = document.querySelector(".btn");
var click = 0;
var sec = 5.5;
var scheduler = 450;

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
      if(scheduler == 450) {
         document.querySelector("h3").innerHTML = `Your click speed is ${click/5} CPS<br>${click} clicks in 5 seconds `;
      } else if(scheduler == 400) {
         document.querySelector("h3").innerHTML = `Your click speed is ${click/10} CPS<br>${click} clicks in 10 seconds `;
      }
      clickElement.replaceWith(box);
     }
   }, scheduler);
 }

 function stopwatch(){
   loop();
   if(sec == 5.5 || sec == 10.5) {
      click = 0;
   }
   if(sec == 5.5) {
      scheduler = 450;
   } else if(sec == 10.5) {
      scheduler = 400;
   }
   setInterval(() => {
     time.innerHTML = `${sec} Seconds Left`;
   }, 1);
 }
 
 function addClick(){
   click++;
   if(scheduler == 450) {
      document.querySelector("h3").innerHTML = `Your click speed is ${click/5} CPS<br>${click} Clicks`;
   } else if(scheduler == 400) {
      document.querySelector("h3").innerHTML = `Your click speed is ${click/10} CPS<br>${click} Clicks`;
   }
 }

 cps.addEventListener('click',function(){
   if(sec == 5.5) {
      sec = 10.5;
      document.querySelector("h4").innerHTML = `Now set to 10.5 Seconds`;
   } else if(sec == 10.5) {
      sec = 5.5;
      document.querySelector("h4").innerHTML = `Now set to 5.5 Seconds`;
   }
 })

 box.addEventListener('click',function(){
    stopwatch();
    box.replaceWith(clickElement);
    btn.style.display = "none";
    clickElement.addEventListener('click',function(){ addClick(); })
})
//Nah please not use this code it bug he
