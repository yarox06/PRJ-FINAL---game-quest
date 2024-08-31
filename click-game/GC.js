let clicks = 0;
let timeLeft = 20;
let gameActive = false;

const clickButton = document.getElementById("clickButton");
const clicksDisplay = document.getElementById("clicks");
const timeLeftDisplay = document.getElementById("timeLeft");
const startButton = document.getElementById("startButton");

clickButton.addEventListener("click", () => {
    if (gameActive) {
        clicks++;
        clicksDisplay.textContent = clicks;
    }
});

startButton.addEventListener("click", () => {
    clicks = 0;
    timeLeft = 20;
    gameActive = true;
    clicksDisplay.textContent = clicks;
    timeLeftDisplay.textContent = timeLeft;
    clickButton.disabled = false;

    const countdown = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            gameActive = false;
            clickButton.disabled = true;
            alert(`Game over! You clicked ${clicks} times.`);
        }
    }, 1000);
});