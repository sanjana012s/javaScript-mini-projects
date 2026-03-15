document.addEventListener("DOMContentLoaded", function(){

let gameSeq = [];
let userSeq = [];

let btnColors = ["yellow","blue","green","red"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = document.querySelectorAll(".btn");


// USER BUTTON PRESS
for(let btn of btns){

    btn.addEventListener("click", function(){

        let btn = this;

        userFlash(btn);

        if(started == false){
            started = true;
            setTimeout(levelUp,1000);
            return;
        }

        let userColor = btn.classList[1];

        userSeq.push(userColor);

        checkAns(userSeq.length-1);

    });

}



// LEVEL FUNCTION
function levelUp(){

    userSeq = [];
    level++;

    h2.innerText = "Level " + level;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btnColors[randIdx];

    gameSeq.push(randColor);

    let randBtn = document.querySelector("." + randColor);

    gameFlash(randBtn);

}



// GAME FLASH
function gameFlash(btn){

    btn.classList.add("gameflash");

    setTimeout(function(){
        btn.classList.remove("gameflash");
    },400);

}



// USER FLASH
function userFlash(btn){

    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);

}



// CHECK ANSWER
function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){

        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }

    } else {

        document.body.classList.add("game-over");

        h2.innerText = "Game Over! Score: " + level;

        setTimeout(function(){
            document.body.classList.remove("game-over");
            reset();
        },1000);

    }

}



// RESET GAME
function reset(){

    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];

}

});