var pc = document.getElementById("pc_image");
var image = pc;
pc.addEventListener("dragstart", e => e.preventDefault());
pc.addEventListener("mousedown", e => e.preventDefault());
pc.addEventListener("mousedown", (e)=>{
    console.log("je suis dans down");
    
  document.addEventListener("mousemove", move)
  document.addEventListener("mouseup", mouseup)
  });
function mouseup(e){
    document.removeEventListener("mousemove", move) 

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