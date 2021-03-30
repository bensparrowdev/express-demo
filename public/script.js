const button = document.getElementById("rollBtn")
const player = document.getElementById("player")
const score = document.getElementById("score")
const dice = document.getElementById("diceImg")

button.addEventListener("click", () => {
    if (button.innerHTML == "Play Again" || button.innerHTML == "Try Again" || player.innerHTML == "You Win!") {
        button.innerHTML = "Roll";
        score.innerHTML = 0;
        player.innerHTML = "Player 1"
    }

    //Generate random number
    let randomNum = Math.round(Math.random() * 5) + 1;
    let newScore = parseInt(score.innerHTML);
    dice.src = `./img/dice${randomNum}.png`;


    if (randomNum == 1) {
        player.innerHTML = "Oh No, You Lose!"
        button.innerHTML = "Try Again"
    } else if (score.innerHTML < 30) {
        newScore += randomNum;
        score.innerHTML = newScore;
    }

    if (newScore >= 30) {
        player.innerHTML = "You Win!";
        button.innerHTML = "Play Again"
    }
})