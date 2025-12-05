var index = 0;
fetch("distro.json")
    .then(response => response.json())
    .then(items => {
        const container = document.getElementById("cards");

        items.forEach(item => {
            const card = document.createElement("div");
            card.id = "card" + String(index)
            index = index + 1
            card.className = "card";

            card.innerHTML = `
                <div class="card-title">${item.distro}</div>
                <div class="card-icon"><img src="${item.logo}" alt="${item.distro} logo"></div>
                <div class="card-desc">${item.description}</div>
                <button class="OSButton">Installation de l'OS</button>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error("Erreur JSON :", error));
