//add guessed number
//start a new game button

const randomNr = Math.floor(Math.random() * 51);
const guessCon = document.querySelector(".guessContainer");
const guessBtn = document.querySelector(".guessBtn");
const guessInput = document.querySelector(".guessInput");
const guessRemaining = document.querySelector(".guessRemaining");
const numRemaining = document.querySelector(".numRemaining");
const highLowVal = document.querySelector(".highLowVal");
let numGuesses = 1;

function endGame() {
  guessInput.value = "";
  //Disable user input button
  guessInput.setAttribute("disabled", "");
}

function calcRemaining() {
  guessInput.value = "";
  numGuesses++;
  numRemaining.innerHTML = `${11 - numGuesses}  `;
}

function displayMessage(message) {
  highLowVal.innerHTML = `${message}`;
}

function highLowValFunc(number) {
  if (number < randomNr) {
    displayMessage(`Your number is too low. Try again`);
  } else if (number > randomNr) {
    displayMessage(`Your number is too high. Try again`);
  } else if (number == randomNr) {
    displayMessage(`Congratulations! You got the number!`);
  }
}

function numValidation(number) {
  //attempt 10th인지 아닌지도 val해라!
  if (isNaN(number)) {
    alert(`Please input valid number.`);
  } else if (number < 1) {
    alert(`Your number is too small. Put number between 1-50.`);
  } else if (number > 50) {
    alert(`Your number is too big. Put number between 1-50.`);
  } else {
    if (numGuesses === 10) {
      if (number == randomNr) {
        calcRemaining();
        displayMessage(`Congratulations! You got the number!`);
        endGame();
      } else {
        calcRemaining();
        displayMessage(`Game Over! Number was ${randomNr}`);
        endGame();
      }
    } else {
      highLowValFunc(guessInput.value);
      calcRemaining();
    }
  }
}

function handleClick(event) {
  event.preventDefault();
  numValidation(guessInput.value);
}

function init() {
  guessBtn.addEventListener("click", handleClick);
  numGuesses = 1;
  numRemaining.innerHTML = `${11 - numGuesses}`;
  console.log(randomNr);
}

init();
