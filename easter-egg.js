// Easter egg : affiche le goose en gros plan pendant 3 secondes
(function () {
  let typedKeys = "";
  const SECRET_CODE = "goose";

  // Créer l'élément goose (caché par défaut)
  const gooseOverlay = document.createElement("div");
  gooseOverlay.id = "goose-overlay";
  gooseOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.9);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

  const gooseImg = document.createElement("img");
  gooseImg.src = "assets/goose.png";
  gooseImg.alt = "GOOSE!";
  gooseImg.style.cssText = `
        width: 80vw;
        height: 80vh;
        object-fit: contain;
        filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
    `;

  // Debug pour vérifier le chargement
  gooseImg.onload = function () {
    console.log("✅ Goose image loaded successfully!");
  };
  gooseImg.onerror = function () {
    console.error("❌ Failed to load goose image");
  };

  gooseOverlay.appendChild(gooseImg);
  document.body.appendChild(gooseOverlay);

  // Fonction pour afficher le goose
  function showGoose() {
    console.log("🦆 GOOSE ACTIVATED!");
    gooseOverlay.style.display = "flex";
    // Petit délai pour permettre la transition
    setTimeout(() => {
      gooseOverlay.style.opacity = "1";
    }, 10);

    // Disparaît après 3 secondes
    setTimeout(() => {
      gooseOverlay.style.opacity = "0";
      setTimeout(() => {
        gooseOverlay.style.display = "none";
      }, 300);
    }, 3000);
  }

  // Activation : Taper "GOOSE" au clavier
  document.addEventListener("keydown", function (e) {
    typedKeys += e.key.toLowerCase();

    // Garde seulement les 5 derniers caractères
    if (typedKeys.length > SECRET_CODE.length) {
      typedKeys = typedKeys.slice(-SECRET_CODE.length);
    }

    if (typedKeys === SECRET_CODE) {
      showGoose();
      typedKeys = ""; // Reset
    }
  });

  console.log("🦆 Easter egg loaded! Try typing a secret word...");
})();
