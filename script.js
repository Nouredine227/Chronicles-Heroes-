document.addEventListener("DOMContentLoaded", function() {
    const platformSelect = document.getElementById("platform-select");
    const gameIcon = document.getElementById("game-icon");
    const gameVersion = document.getElementById("game-version");
    const downloadBtn = document.getElementById("download-btn");
    const downloadIcon = document.getElementById("download-icon");
    const gameVideo = document.getElementById("game-video");
    const comingSoonText = document.getElementById("coming-soon");

    fetch("game-data.json")
        .then(response => response.json())
        .then(data => {
            const gameData = data["Chronicles_Heroes"];

            function updateGameInfo(platform) {
                gameIcon.src = gameData[platform].icon;
                gameVersion.textContent = gameData[platform].version;
                downloadBtn.href = gameData[platform].download;
                downloadIcon.src = gameData[platform].buttonIcon;
                gameVideo.src = gameData[platform].videoUrl;

                if (gameData[platform].enabled) {
                    downloadBtn.style.display = "inline-flex";
                    comingSoonText.style.display = "none";
                } else {
                    downloadBtn.style.display = "none";
                    comingSoonText.style.display = "block";
                }
            }

            platformSelect.addEventListener("change", function() {
                updateGameInfo(this.value);
            });

            updateGameInfo("Windows");
        })
        .catch(error => console.error("Erreur de chargement du JSON :", error));
});