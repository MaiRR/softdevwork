var pic = document.getElementById("vimage");
var clear = document.getElementById("but_clear");

var x;
var y;

var dot = function(x, y) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("fill", "purple");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "15");
    c.setAttribute("stroke", "black");
    c.addEventListener("click", change); 
    pic.appendChild(c); 
}


var change = function(e) {
    e.stopPropagation(); 
    if (e.target.getAttribute("fill") == "purple"){
        e.target.setAttribute("fill", "green"); 
    } else {
        pic.removeChild(e.target);
        x = Math.random() * 500;
        y = Math.random() * 500;
        dot(x, y);
    }
}


var draw = function(e) {
    x = e.offsetX;
    y = e.offsetY;
    dot(x,y);
};


clear.addEventListener('click', function(e) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", pic.getAttribute("width"));
    rect.setAttribute("height", pic.getAttribute("height"));
    rect.setAttribute("fill", "white");
    pic.appendChild(rect);
});

pic.addEventListener("click", draw);

