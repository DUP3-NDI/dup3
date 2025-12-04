var pc = document.getElementById("pc_image");
var image = pc;
var pb = document.getElementById("pb_image");
light()
pc.addEventListener("dragstart", e => e.preventDefault());
pc.addEventListener("mousedown", e => e.preventDefault());
pc.addEventListener("mousedown", mousedown);

function mousedown(e){
  console.log("je suis dans down");
  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", mouseup);
}

function setText(){
  var texte = document.getElementById("No");
  texte.innerHTML = "NOOOOOOO!!!"
}

function mouseup(e){
  document.removeEventListener("mousemove", move);
  if (isOverlapping(pc,pb)){
    console.log("ddd")
    dark();
    setText()

    pc.removeEventListener("mousedown",mousedown);
    setTimeout(function(){
      light();
      pc.style.left = "200px";
      pc.style.top = "150px";
    }, 2000);
  }
}
function dark() {
    document.getElementById("darken").style.display = "block";
}
function light() {
    document.getElementById("darken").style.display = "none";
}
function isOverlapping(el1, el2) {
    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();

    return !(r1.right < r2.left || 
             r1.left > r2.right || 
             r1.bottom < r2.top || 
             r1.top > r2.bottom);
}

function move(e){
    const w = pc.offsetWidth / 2;
    const h = pc.offsetHeight / 2;
    var newX = e.clientX -w;
    var newY = e.clientY -h;

    image.style.left = newX + "px";
    image.style.top = newY + "px";
}

console.log("je marche bien");