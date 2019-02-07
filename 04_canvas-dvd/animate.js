// thesky -- Angela Tom and Mai Rachlevsky
// SoftDev2 pd7
// K03 -- They lock us in the tower whenever we get caught
// 2019-02-06
var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var requestID;
var radius = 0;
var growing = true;
var rectX;
var RectY;
var rectWidth;
var rectHeight;
var velX;
var velY;
// Clear canvas
var stopIt = function() {
window.cancelAnimationFrame(requestID);
};
var clear = function() {
ctx.clearRect(0,0,canvas.width,canvas.height);
}
var drawDot = function() {
window.cancelAnimationFrame(requestID);
clear();
    requestID = window.requestAnimationFrame(drawDot);
console.log(requestID);
ctx.fillStyle = "black";
if (growing){
	radius++;
    } else {
	radius--;
    }
ctx.beginPath(); //
ctx.arc(canvas.width/2,canvas.height/2,radius,0,Math.PI*2);
ctx.fill();
ctx.stroke();
if(radius == canvas.width/2){
	growing = false;
    } else if (radius == 0){
	growing = true;
    }
//clear();
}	
var dvdLogoSetup = function() {
dvdRun()
}
var dvdRun = function() {
window.cancelAnimationFrame(requestID);
clear();
rectWidth = 100;
rectHeight = 50;
rectX = Math.floor(Math.random() * (canvas.width - rectWidth));
rectY = Math.floor(Math.random() * (canvas.height - rectHeight));
xVel = 1;
yVel = 1;
var logo= new Image();
logo.src = "logo_dvd.jpg";
    
    
    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
if (rectX + rectWidth == canvas.width || rectX == 0){
	    xVel = xVel * -1;
    }
if (rectY + rectHeight == canvas.height || rectY == 0){
	    xVel = xVel * -1;
    }
    rectX = rectX + xVel;
    rectY = rectY + yVel;
    requestID = window.requestAnimationFrame(dvdRun);

}




var dotButton = document.getElementById("circle");
dotButton.addEventListener('click', drawDot);
var clear_button = document.getElementById("stop");
clear_button.addEventListener('click', stopIt);
var movie_button = document.getElementById("dvd");
movie_button.addEventListener('click', dvdLogoSetup);// thesky -- Angela Tom and


	    

