var character = document.getElementById("character");
var block = document.getElementById("block");
var info = document.getElementById("info");

let html = document.getElementById("html");
html.addEventListener("click", () => {
    block.classList.add("animate-block");
    info.style.display = "none";
});




function jump() {
    if(character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var isDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130) {
        block.style.animation = "none";
        block.style.display = "none";
        if(alert("Game Over!")){}
        else    window.location.reload();
    }
},10);
