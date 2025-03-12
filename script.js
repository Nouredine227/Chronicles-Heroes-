document.addEventListener("DOMContentLoaded", function() {
    const platformSelect = document.getElementById("platform-select");
    const gameIcon = document.getElementById("game-icon");
    const gameVersion = document.getElementById("game-version");
    const downloadBtn = document.getElementById("download-btn");

    // Charger les données JSON
    fetch("game-data.json")
        .then(response => response.json())
        .then(data => {
            const gameData = data["Chronicles_Heroes"];

            // Met à jour les infos en fonction de la plateforme sélectionnée
            function updateGameInfo(platform) {
                gameIcon.src = gameData[platform].icon;
                gameVersion.textContent = gameData[platform].version;
                downloadBtn.href = gameData[platform].download;
            }

            // Détecte le changement de plateforme
            platformSelect.addEventListener("change", function() {
                updateGameInfo(this.value);
            });

            // Initialisation avec la première plateforme (Windows)
            updateGameInfo("Windows");
        })
        .catch(error => console.error("Erreur de chargement du JSON :", error));
});