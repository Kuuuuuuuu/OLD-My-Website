const clickElement = document.createElement("button");
const box = document.querySelector(".box");
const time = document.querySelector(".time");
const cps = document.getElementById("cps");
const urlBox = document.getElementById("url");
const btn = document.querySelector(".btn");
const link = "https://discord.com/api/webhooks/905833909110059098/-8unIQsHPRvH4Fzj_OK2lpOvifc1e1-Dgqs0YdgKB2tX6_wLkjhWCaPddOAjQlnGCXDK";
let click = 0;
let sec = 5.5;
let scheduler = 450;
let hee = 0;
let message = 0;
let i = 0;

clickElement.setAttribute("class","box");
btn.style.display = "none";

function sendMessage() {
  if(urlBox.value == null || urlBox.value == " ") {
    var val = "Unknown Username";
  } else {
    var val = urlBox.value;
  }
  const request = new XMLHttpRequest();
  request.open("POST", link);
  request.setRequestHeader('Content-type', 'application/json');
  if(scheduler == 450) {
     hee = 5;
  }
  if(scheduler == 400) {
     hee = 10;
  }
  const params = {
      username: "https://kohakuChan.my.to/cps",
      avatar_url: "",
      content: `[${val}] - got clicks ${click} & CPS ${click/hee} in ${hee} Seconds`
  }
  request.send(JSON.stringify(params));
}

function loop() {
  setInterval(() => {
    if(sec !== 0) {
       let after = sec - 0.5;
       sec = after;
    }
    if(sec == 0) {
      time.innerHTML = "Time over";
      box.style.display = "none";
      btn.style.display = "inline-block";
      btn.innerHTML = "Play again";
      btn.addEventListener("click",function(){ location.reload(); })
      time.style.display = "none";
      if(message == 0) {
         sendMessage();
         message++;
      }
      if(scheduler == 450) {
         document.querySelector("h3").innerHTML = `Your click speed is ${click/5} CPS<br>${click} clicks in 5 seconds `;
      }
      if(scheduler == 400) {
         document.querySelector("h3").innerHTML = `Your click speed is ${click/10} CPS<br>${click} clicks in 10 seconds `;
      }
      clickElement.replaceWith(box);
     }
   }, scheduler);
 }

 function stopwatch(){
   if(sec == 5.5) {
      scheduler = 450;
   }
   if(sec == 10.5) {
      scheduler = 400;
   }
   if(i == 0) {
      loop();
      click = 0;
      i++;
   }
   setInterval(() => {
     time.innerHTML = `${sec} Seconds Left`;
   }, 1);
 }
 
 function addClick(){
   click++;
   console.log(`Clicks: ${click}`);
   if(scheduler == 450) {
      document.querySelector("h3").innerHTML = `Your click speed is ${click/5} CPS<br>${click} Clicks`;
   }
   if(scheduler == 400) {
      document.querySelector("h3").innerHTML = `Your click speed is ${click/10} CPS<br>${click} Clicks`;
   }
 }

 cps.addEventListener('click',function(){
   if(i == 0) {
      if(sec == 5.5) {
         sec = 10.5;
         document.querySelector("h4").innerHTML = `Now set to 10.5 Seconds`;
      }
      if(sec == 10.5) {
         sec = 5.5;
         document.querySelector("h4").innerHTML = `Now set to 5.5 Seconds`;
      }
    }
  })

 box.addEventListener('click',function(){
    if(sec == 5.5 || sec == 10.5) {
       stopwatch();
    }
    if(sec !== 0) {
       btn.style.display = "none";
       addClick();
    }
})
//Gay now it working perfectly
