var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");
var mode = document.getElementById("mode");

clear.addEventListener('click', function() {
    ctx.clearRect(0, 0, c.width, c.height)})


toggle.addEventListener('click', function(e) {
    if (mode.innerHTML == "rectangle") {
      mode.innerHTML = "dot"
    }
    else {
      mode.innerHTML = "rectangle"
    }})    


c.addEventListener('click', function(e){
    var xcor = e.clientX;
    var ycor = e.clientY;
    if (mode.innerHTML == "rectangle") {
      ctx.fillRect(xcor-30, ycor-30, 10, 50);
    }
    else {
      ctx.beginPath();
      ctx.ellipse(xcor-5, ycor-125, 10, 10, Math.PI / 4, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
    }})
