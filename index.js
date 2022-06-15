var randomNumber1 = Math.random();

randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomNumber2 = Math.random();

randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var player1 = prompt("Enter Player 1 name: ");

var player2 = prompt("Enter Player 2 name: ");

var firstLetter1 = player1.slice(0, 1);

var player1FirstLetterToUpper = firstLetter1.toUpperCase();

var restOfName1 = player1.slice(1, player1.length);

restOfName1 = restOfName1.toLowerCase();

var firstLetter2 = player2.slice(0, 1);

var player2FirstLetterToUpper = firstLetter2.toUpperCase();

restOfName2 = player2.slice(1, player2.length);

restOfName2 = restOfName2.toLowerCase();

player1 = player1FirstLetterToUpper + restOfName1;

player2 = player2FirstLetterToUpper + restOfName2;

if (player1.length > 5) {
  alert("Player name should be only 5 characters maximum.")

  function FatalError() {
    Error.apply(this, arguments);
    this.name = "FatalError";
  }
  FatalError.prototype = Object.create(Error.prototype);

  throw new FatalError("Something went wrong!");
}


if (player2.length > 5) {
  alert("Player name should be only 5 characters maximum.")

  function FatalError() {
    Error.apply(this, arguments);
    this.name = "FatalError";
  }
  FatalError.prototype = Object.create(Error.prototype);

  throw new FatalError("Something went wrong!");
}

document.querySelectorAll("p")[0].innerHTML = player1;

document.querySelectorAll("p")[1].innerHTML = player2;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");


function rollADice() {

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩" + player1 + " wins!";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else {
    document.querySelector("h1").innerHTML = player2 + " wins! 🚩";
  }

}

function playAgain() {
  window.location.reload('Refresh')
}
