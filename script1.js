var score = 0;
var cross = true;

var music = new Audio("Level Song.mp3");
setTimeout(() => {
    music.play();
}),100;

var gameoverm = new Audio("meow.mp3");

document.onkeydown = function(e){
    console.log("key code is: ", e.keyCode)
    if(e.keyCode==38){
        var cat = document.querySelector(".cat");
        if(cat.classList == "animateCat"){return}
        cat.classList.add("animateCat");
        setTimeout(() => {
            cat.classList.remove("animateCat");
        },700);
        jumpm.play();
    }

    if(e.keyCode==39){
        var cat = document.querySelector(".cat");
        var catx = parseInt(window.getComputedStyle(cat, null).getPropertyValue("left"));
        cat.style.left = catx + 100 + "px";
    }

    if(e.keyCode==37){
        var cat = document.querySelector(".cat");
        var catx = parseInt(window.getComputedStyle(cat, null).getPropertyValue("left"));
        cat.style.left = catx - 100 + "px";
    }
}

setInterval(() => {
    var cat = document.querySelector(".cat");
    var gameOver = document.querySelector(".gameover");
    var tikus = document.querySelector(".tikus");

    var mx = parseInt(window.getComputedStyle(cat, null).getPropertyValue("left"));
    var my = parseInt(window.getComputedStyle(cat, null).getPropertyValue("top"));

    var  dx  = parseInt(window.getComputedStyle(tikus, null).getPropertyValue("left"));
    var dy = parseInt(window.getComputedStyle(tikus, null).getPropertyValue("top"));

    var offsetX  = Math.abs(mx-dx);
    var offsetY = Math.abs(my-dy);
    console.log(offsetX, offsetY);
    if(offsetX< 200 & offsetY<100){
        cat.style.visibility = "hidden";
        gameOver.innerHTML = "YOU LOSE! (please reload to play again meow)";
        tikus.classList.remove("tikusani");
        score = 0;
        music.pause();
        gameoverm.play();
    }else if(offsetX< 113 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
           cross = true; 
        },1000);
        setTimeout(() => {
        var aniDur = parseFloat(window.getComputedStyle(tikus, null).getPropertyValue("animation-duration"));
        var newDur = aniDur - 0.4;
        tikus.style.animationDuration = newDur + "s";
        scorem.play();
        },500);
    }

}, 10);

function updateScore(score){
    document.querySelector(".scoreCount").innerHTML = "Your Score: " + score; 
}