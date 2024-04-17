var cursor = document.querySelector('.cursor');

window.addEventListener("mousemove", (e) => {
  cursor.style.display = "block"
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 10px), calc(${e.clientY}px - 10px), 0)`
});

var showMenu = document.getElementById("showMenu")
var close = document.getElementById("close")
var hamburgerMenu = document.getElementById("hamburgerMenu")
var transparant = document.getElementById("transparant")

showMenu.onclick = function(){
  hamburgerMenu.style.display = "block"
  transparant.style.display = "block"
}

transparant.onclick = function(){
  hamburgerMenu.style.display = "none"
  transparant.style.display = "none"
}

close.onclick = function(){
  hamburgerMenu.style.display = "none"
  transparant.style.display = "none"
}