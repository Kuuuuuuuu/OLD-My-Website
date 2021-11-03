let box = document.querySelector(".box");
let time = document.querySelector(".time");
let clicks = document.querySelector(".clicks");

let clickElement = document.createElement("div");
clickElement.setAttribute("class","box");

// function for 5 seconds
let btn = document.querySelector(".btn");
btn.style.display = "none";
function stopwatch(){
    setTimeout(() => {
        time.innerHTML = "5 Seconds Left";
        setTimeout(() => {
            time.innerHTML = "4 Seconds Left";
            setTimeout(() => {
                time.innerHTML = "3 Seconds Left";
                setTimeout(() => {
                    time.innerHTML = "2 Seconds Left";
                    setTimeout(() => {
                        time.innerHTML = "1 Seconds Left";
                        setTimeout(() => {
                            time.innerHTML = "Time over";
                            box.style.display = "none";
                            btn.style.display = "inline-block";
                            btn.innerHTML = "Play again";
                            btn.addEventListener("click",function(){
                                location.reload();
                            })
                            time.style.display = "none";
                            clicks.innerHTML = "";
                            document.querySelector("h1").innerHTML = `Your click speed is ${click/5} CPS<br>${click} clicks in 5 seconds `;
                            clickElement.replaceWith(box);  
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 0000);
}

box.addEventListener('click',function(){
    stopwatch();
    click = 1;
    clicks.innerHTML = click;

    box.replaceWith(clickElement);

    btn.style.display = "none";
    click = 0;
    clickElement.addEventListener('click',function(){

        click = click + 1;
        // click is the clicks entered by the user
        clicks.innerHTML = click;
    })
})

