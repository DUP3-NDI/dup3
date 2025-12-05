var pc = document.getElementById("pc_image");
var etat = 0
var image = pc;
var pb = document.getElementById("pb_image");
var tot = 0;

const pcButtonsContainer = document.getElementById("pc-buttons");
const pcButtons = document.querySelectorAll(".pc-btn");

const container = document.getElementById("imagesContainer");
const container2 = document.getElementById("imagesContainer2");
const container3 = document.getElementById("imagesContainer3");

const images = document.querySelectorAll(".motherboard-image");

light();

// empêcher le vrai drag du navigateur
pc.addEventListener("dragstart", e => e.preventDefault());
pc.addEventListener("mousedown", mousedown);

function mousedown(e){
  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", mouseup);
}

function setNoText(){
  var texte = document.getElementById("No");
  texte.innerHTML = "NON!!! Vous pouvez sûrement le reconditionner en modifiant certains composants."
}

function setVisibility(element, boolean){
  if (boolean == true){
    element.style.visibility = "visible";
  } else{
    element.style.visibility = "hidden"
  }

}

function updateText(){
  var titre = document.getElementById("titre");
  titre.innerHTML = "Maintenant, il faut remplacer les composants qui étaient défaillants par des composants qui ont un faible coût pour l'environnemenent"
}

function mouseup(e){
  document.removeEventListener("mousemove", move);
  if (isOverlapping(pc,pb) && etat == 0){
    dark();
    setNoText()
    etat = 1;
    pc.removeEventListener("mousedown",mousedown);
    setTimeout(function(){
      light();
      updateText();

      // recentrer PC
      pc.style.left = "50%";
      pc.style.top = "50%";
      pc.style.transform = "translate(-50%, -50%)";
      pb.style.visibility = "hidden";

      // afficher les boutons sur le PC
      pcButtonsContainer.style.display = "flex";
  pcButtons[0].addEventListener("click", (e) => {
      showMotherboards(e.target.dataset.mb, e.target);
  }, {once:true});

  pcButtons[1].addEventListener("click", (e) => {
      showSsd(e.target.dataset.mb, e.target);
  }, {once:true}); 

  pcButtons[2].addEventListener("click", (e) => {
      showRam(e.target.dataset.mb, e.target);
  }, {once:true}); 
  
    var texte = document.getElementById("No");
    texte.style.visibility = "hidden";

      // afficher tes transparents
    }, 2000);
  }
}

function showMotherboards(slot, button){
    // Afficher le bon container selon le slot
    const containers = {
        "1": document.getElementById("imagesContainer"),
        "2": document.getElementById("imagesContainer2"),
        "3": document.getElementById("imagesContainer3")
    };
    Object.values(containers).forEach(c => c.style.display = "none");
    const currentContainer = containers[slot];
    currentContainer.style.display = "flex";
    const currentContainerlist = currentContainer.querySelectorAll(".motherboard-image");
    // Ajouter un listener au bouton pour le clic final
      currentContainerlist[0].addEventListener("click", () => {
        button.classList.add("usedfalse"); 
        tot=tot+1;
        if (tot === 3){
          dark()
          setVisibility(document.getElementById("cards"), true);
          setVisibility(document.getElementById("pc-buttons"), false);
          light()
        }
        currentContainer.style.display = "none";
        button.disabled = true;
    }, {once:true});
      currentContainerlist[1].addEventListener("click", () => {
        button.classList.add("usedtrue"); 
        tot=tot+1;
        if (tot === 3){
          dark()
          setVisibility(document.getElementById("cards"), true);
          setVisibility(document.getElementById("pc-buttons"), false);
          light()
        }
        currentContainer.style.display = "none";
        button.disabled = true;
            }, {once:true});
      currentContainerlist[2].addEventListener("click", () => {
        button.classList.add("usedfalse"); 
        tot=tot+1;
        if (tot === 3){
          dark()
          setVisibility(document.getElementById("cards"), true);
          setVisibility(document.getElementById("pc-buttons"), false);
          light()
        }
        currentContainer.style.display = "none";
        button.disabled = true;
    }, {once:true});

  }

  function showSsd(slot, button){
    // Afficher le bon container selon le slot
    const containers = {
        "1": document.getElementById("imagesContainer"),
        "2": document.getElementById("imagesContainer2"),
        "3": document.getElementById("imagesContainer3")
    };
    Object.values(containers).forEach(c => c.style.display = "none");
    const currentContainer = containers[slot];
    currentContainer.style.display = "flex";
    const currentContainerlist = currentContainer.querySelectorAll(".ssd-image");
    // Ajouter un listener au bouton pour le clic final
      currentContainerlist[0].addEventListener("click", () => {
        button.classList.add("usedfalse"); 
        tot=tot+1;
        if (tot === 3){
          dark()
          setVisibility(document.getElementById("cards"), true);
          setVisibility(document.getElementById("pc-buttons"), false);
          light()
        }
        currentContainer.style.display = "none";
        button.disabled = true;
    }, {once:true});
      currentContainerlist[1].addEventListener("click", () => {
        button.classList.add("usedfalse"); 
        tot=tot+1;
        if (tot === 3){
          dark()
          setVisibility(document.getElementById("cards"), true);
          setVisibility(document.getElementById("pc-buttons"), false);
          light()
        }
        currentContainer.style.display = "none";
        button.disabled = true;
            }, {once:true});
      currentContainerlist[2].addEventListener("click", () => {
        button.classList.add("usedtrue"); 
        tot=tot+1;
        if (tot === 3){
          dark()
          setVisibility(document.getElementById("cards"), true);
          setVisibility(document.getElementById("pc-buttons"), false);
          light()
        }
        currentContainer.style.display = "none";
        button.disabled = true;
    }, {once:true});

  }

function showRam(slot, button){
    // Afficher le bon container selon le slot
    const containers = {
        "1": document.getElementById("imagesContainer"),
        "2": document.getElementById("imagesContainer2"),
        "3": document.getElementById("imagesContainer3")
    };
    Object.values(containers).forEach(c => c.style.display = "none");
    const currentContainer = containers[slot];
    currentContainer.style.display = "flex";
    const currentContainerlist = currentContainer.querySelectorAll(".ram-image");

    // Ajouter un listener au bouton pour le clic final
    currentContainerlist[0].addEventListener("click", () => {
        button.classList.add("usedfalse"); 
        tot=tot+1;
        if (tot === 3){
          dark()
          setVisibility(document.getElementById("cards"), true);
          setVisibility(document.getElementById("pc-buttons"), false);
          light()
        }
        currentContainer.style.display = "none";
        button.disabled = true;
    }, {once:true});
        currentContainerlist[1].addEventListener("click", () => {
        button.classList.add("usedtrue"); 
        tot=tot+1;
        if (tot === 3){
          dark()
          setVisibility(document.getElementById("cards"), true);
          setVisibility(document.getElementById("pc-buttons"), false);
          light()
        }
        currentContainer.style.display = "none";
        button.disabled = true;
    }, {once:true});
        currentContainerlist[2].addEventListener("click", () => {
        button.classList.add("usedfalse"); 
        tot=tot+1;
        if (tot === 3){
          dark()
          setVisibility(document.getElementById("cards"), true);
          setVisibility(document.getElementById("pc-buttons"), false);
          light()
        }
        currentContainer.style.display = "none";
        button.disabled = true;
    }, {once:true});
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

    pc.style.left = (e.clientX - w) + "px";
    pc.style.top = (e.clientY - h) + "px";
}

console.log("je marche très bien");