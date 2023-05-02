// Get all button and tile ids
var btn0 = document.getElementById("btn0")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var btn5 = document.getElementById("btn5")
var btn6 = document.getElementById("btn6")

var tile0 = document.getElementById("tile0")
var tile1 = document.getElementById("tile1")
var tile2 = document.getElementById("tile2")
var tile3 = document.getElementById("tile3")
var tile4 = document.getElementById("tile4")
var tile5 = document.getElementById("tile5")
var tile6 = document.getElementById("tile6")

tile1.classList.add("hidden");
tile2.classList.add("hidden");
tile3.classList.add("hidden");
tile4.classList.add("hidden");
tile5.classList.add("hidden");
tile6.classList.add("hidden");

btn0.style.backgroundColor='rgb(216, 230, 242)';

btn0.addEventListener("click", ()=>{
    tile0.classList.remove("hidden");
    tile1.classList.add("hidden");
    tile2.classList.add("hidden");
    tile3.classList.add("hidden");
    tile4.classList.add("hidden");
    tile5.classList.add("hidden");
    tile6.classList.add("hidden");
    btn0.style.backgroundColor='rgb(216, 230, 242)';
    btn1.style.backgroundColor='rgb(247, 247, 247)';
    btn2.style.backgroundColor='rgb(247, 247, 247)';
    btn3.style.backgroundColor='rgb(247, 247, 247)';
    btn4.style.backgroundColor='rgb(247, 247, 247)';
    btn5.style.backgroundColor='rgb(247, 247, 247)';
    btn6.style.backgroundColor='rgb(247, 247, 247)';
});
btn1.addEventListener("click", ()=>{
    tile1.classList.remove("hidden");
    tile0.classList.add("hidden");
    tile2.classList.add("hidden");
    tile3.classList.add("hidden");
    tile4.classList.add("hidden");
    tile5.classList.add("hidden");
    tile6.classList.add("hidden");
    btn0.style.backgroundColor='rgb(247, 247, 247)';
    btn1.style.backgroundColor='rgb(216, 230, 242)';
    btn2.style.backgroundColor='rgb(247, 247, 247)';
    btn3.style.backgroundColor='rgb(247, 247, 247)';
    btn4.style.backgroundColor='rgb(247, 247, 247)';
    btn5.style.backgroundColor='rgb(247, 247, 247)';
    btn6.style.backgroundColor='rgb(247, 247, 247)';
});
btn2.addEventListener("click", ()=>{
    tile2.classList.remove("hidden");
    tile0.classList.add("hidden");
    tile1.classList.add("hidden");
    tile3.classList.add("hidden");
    tile4.classList.add("hidden");
    tile5.classList.add("hidden");
    tile6.classList.add("hidden");
    btn0.style.backgroundColor='rgb(247, 247, 247)';
    btn1.style.backgroundColor='rgb(247, 247, 247)';
    btn2.style.backgroundColor='rgb(216, 230, 242)';
    btn3.style.backgroundColor='rgb(247, 247, 247)';
    btn4.style.backgroundColor='rgb(247, 247, 247)';
    btn5.style.backgroundColor='rgb(247, 247, 247)';
    btn6.style.backgroundColor='rgb(247, 247, 247)';
});
btn3.addEventListener("click", ()=>{
    tile3.classList.remove("hidden");
    tile0.classList.add("hidden");
    tile1.classList.add("hidden");
    tile2.classList.add("hidden");
    tile4.classList.add("hidden");
    tile5.classList.add("hidden");
    tile6.classList.add("hidden");
    btn0.style.backgroundColor='rgb(247, 247, 247)';
    btn1.style.backgroundColor='rgb(247, 247, 247)';
    btn2.style.backgroundColor='rgb(247, 247, 247)';
    btn3.style.backgroundColor='rgb(216, 230, 242)'; 
    btn4.style.backgroundColor='rgb(247, 247, 247)';
    btn5.style.backgroundColor='rgb(247, 247, 247)';
    btn6.style.backgroundColor='rgb(247, 247, 247)';
});
btn4.addEventListener("click", ()=>{
    tile4.classList.remove("hidden");
    tile0.classList.add("hidden");
    tile1.classList.add("hidden");
    tile2.classList.add("hidden");
    tile3.classList.add("hidden");
    tile5.classList.add("hidden");
    tile6.classList.add("hidden");
    btn0.style.backgroundColor='rgb(247, 247, 247)';
    btn1.style.backgroundColor='rgb(247, 247, 247)';    
    btn2.style.backgroundColor='rgb(247, 247, 247)';
    btn3.style.backgroundColor='rgb(247, 247, 247)';
    btn4.style.backgroundColor='rgb(216, 230, 242)';
    btn5.style.backgroundColor='rgb(247, 247, 247)';
    btn6.style.backgroundColor='rgb(247, 247, 247)';
});
btn5.addEventListener("click", ()=>{
    tile5.classList.remove("hidden");
    tile0.classList.add("hidden");
    tile1.classList.add("hidden");
    tile2.classList.add("hidden");
    tile3.classList.add("hidden");
    tile4.classList.add("hidden");
    tile6.classList.add("hidden");
    btn0.style.backgroundColor='rgb(247, 247, 247)';
    btn1.style.backgroundColor='rgb(247, 247, 247)';
    btn2.style.backgroundColor='rgb(247, 247, 247)';
    btn3.style.backgroundColor='rgb(247, 247, 247)';
    btn4.style.backgroundColor='rgb(247, 247, 247)';
    btn5.style.backgroundColor='rgb(216, 230, 242)';
    btn6.style.backgroundColor='rgb(247, 247, 247)';
});
btn6.addEventListener("click", ()=>{
    tile6.classList.remove("hidden");
    tile0.classList.add("hidden");
    tile1.classList.add("hidden");
    tile2.classList.add("hidden");
    tile3.classList.add("hidden");
    tile4.classList.add("hidden");
    tile5.classList.add("hidden");
    btn0.style.backgroundColor='rgb(247, 247, 247)';
    btn1.style.backgroundColor='rgb(247, 247, 247)';
    btn2.style.backgroundColor='rgb(247, 247, 247)';
    btn3.style.backgroundColor='rgb(247, 247, 247)';
    btn4.style.backgroundColor='rgb(247, 247, 247)';
    btn5.style.backgroundColor='rgb(247, 247, 247)';
    btn6.style.backgroundColor='rgb(216, 230, 242)';
});

// Show or hide scroll button based on screen position
var arrow = document.getElementById("scrollBtn")

$(window).bind('scroll', function() {
    if ($(window).scrollTop() < 60) {
        arrow.classList.add("hidden");
    }
    else {
        arrow.classList.remove("hidden");
    }
});