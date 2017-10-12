var secretNum;
var i = 0;

function generateNum() {
  var name = prompt("Please enter your name" , "Enter name here");
  alert("Now enter your guess!");
  return secretNum = parseInt(Math.random() * 100);
}

function runGame() {
  let guessNum = parseInt(document.getElementById("inputField").value);
    if (guessNum > 100 || guessNum < 0) {
      document.getElementById("outputText").innerHTML = "Please guess a number between 0 and 100";
      return 0;
    }
    if (!Number.isInteger(guessNum)) {
      document.getElementById("outputText").innerHTML = "Your guess must be a number";
      return 0;
    }
    if (guessNum < secretNum) {
      document.getElementById("outputText").innerHTML = "Your guess is too low.";
    }
    else if (guessNum > secretNum) {
      document.getElementById("outputText").innerHTML = "Your guess is too high.";
    }
    else {
      document.getElementById("outputText").innerHTML = "You win!";
      return 0;
    }
    if (i >= 6) {
      document.getElementById("outputText").innerHTML = "You lose!";
      return 0;
    }
    guessNum = document.getElementById("inputField").value;
    return i++;
}
