var pic = document.getElementById("vimage");
var xPrev = -1;
var yPrev = -1;

pic.addEventListener('click', function(e) {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", e.offsetX);
  c.setAttribute("cy", e.offsetY);
  c.setAttribute("r", "10");
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  pic.appendChild(c);

  if (xPrev >= 0) {
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", xPrev);
    l.setAttribute("y1", yPrev);
    l.setAttribute("x2", e.offsetX);
    l.setAttribute("y2", e.offsetY);
    l.setAttribute("stroke", "black");
    pic.appendChild(l);
  }
  xPrev = e.offsetX;
  yPrev = e.offsetY;
});

var clear = document.getElementById("but_clear");
clear.addEventListener('click', function(e) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", pic.getAttribute("width"));
    rect.setAttribute("height", pic.getAttribute("height"));
    rect.setAttribute("fill", "white");
    pic.appendChild(rect);
    xPrev = -1
    yPrev = -1
});
