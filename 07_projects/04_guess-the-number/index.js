const guessNumberInput = document.querySelector("input");
const submitGuessBtn = document.querySelector("button");
const previousGuess = document.querySelector("#previous-guesses");
const remainingGuess = document.querySelector("#remaining-guesses");
const form = document.querySelector("form");
const result = document.querySelector("#result");
const randomNumber = Math.floor(Math.random() * 100 + 1);
const playGame = true;
let remainingGuessNumber = 10;
remainingGuess.innerHTML = `Guesses Remaining: ${remainingGuessNumber}`;

if (playGame === true) {
  previousGuess.innerHTML += " ";
  remainingGuessNumber = 10;
  guessNumberInput.value = "";
  form.addEventListener("submit", function (eventObject) {
    eventObject.preventDefault();
    result.setAttribute("display", "block");
    const guessNumber = parseInt(guessNumberInput.value);
    guessNumberInput.value = "";
    validateGuessNumber(guessNumber);
  });
}

function validateGuessNumber(guessNumber) {
  if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
    displayGuessNumberMessage("Invalid", guessNumber);
  } else if (guessNumber === randomNumber) {
    displayGuessNumberMessage("Equal", guessNumber);
  } else if (guessNumber < randomNumber) {
    displayGuessNumberMessage("Less", guessNumber);
  } else if (guessNumber > randomNumber) {
    displayGuessNumberMessage("Greater", guessNumber);
  }
}

function displayGuessNumberMessage(guessStatus, guessNumber) {
  if (remainingGuessNumber >= 1) {
    if (!isNaN(guessNumber) && guessNumber >= 1 && guessNumber <= 100) {
      previousGuess.innerHTML += guessNumber + " ";
    }
    remainingGuessNumber = remainingGuessNumber - 1;
    remainingGuess.innerHTML = `Guesses Remaining: ${remainingGuessNumber}`;
  }

  if (remainingGuessNumber === 0) {
    guessNumberInput.setAttribute("disabled", "");

    return;
  }
  if (guessStatus === "Invalid") {
    result.innerHTML = `<p>Please enter a valid guess number</p>`;
    remainingGuessNumber++;
    // endGame() // maybe
    return;
  } else if (guessStatus === "Equal") {
    result.innerHTML = `<p>Congratulations! You guessed the number(${guessNumber}) in ${
      10 - remainingGuessNumber
    } attempts.</p>`;
    guessNumberInput.setAttribute("disabled", "");
    submitGuessBtn.setAttribute("disabled", "");
    return;
  } else if (guessStatus === "Less") {
    result.innerHTML = `<p>Your guess is a bit low. Try again!</p>`;
    return;
  } else {
    result.innerHTML = `<p>Your guess is a bit high. Try again!</p>`;
    return;
  }
}

function startGame() {
  previousGuess.innerHTML = "Previous Guesses: ";
  remainingGuessNumber = 10;
  remainingGuess.innerHTML = `Guesses Remaining: ${remainingGuessNumber}`;
  guessNumberInput.value = "";
  result.innerHTML = " ";
}
