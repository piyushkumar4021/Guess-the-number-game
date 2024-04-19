let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let won = false;

console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const changeScore = function (score) {
  document.querySelector(".current-score").textContent = score;
};

//
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input-number").value);

  // When Game is LOST
  if (score === 0 || won) {
  }

  // When guess is Invalid
  else if (!guess) {
    displayMessage("❌ Invalid Number");
  }

  // When guess is correct
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "20rem";
    won = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? "📉 Too Low!" : "📈 Too High!");
    } else {
      // User lost game setting score to 0
      displayMessage("💥 You Lost the Game!");
      document.querySelector("body").style.backgroundColor = "#fa8128";
      document.querySelector(".number").textContent = secretNumber;
    }
    score--;
    changeScore(score);
  }
});

// When user restarts game
document.querySelector(".again").addEventListener("click", function () {
  // Reseting Visually
  changeScore(20);
  displayMessage("Start guessing...");
  document.querySelector(".input-number").value = "0";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";

  // Changing Backend Values
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  won = false;
  console.log(secretNumber);
});
