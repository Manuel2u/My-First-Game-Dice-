var randomNumber1 = Math.random();

randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomNumber2 = Math.random();

randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var player1 = prompt("Enter Player 1 name: ");

var player2 = prompt("Enter Player 2 name: ");

player1 = player1.toUpperCase();

player2 = player2.toUpperCase();

document.querySelectorAll("p")[0].innerHTML = player1;

document.querySelectorAll("p")[1].innerHTML = player2;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");


function rollADice () {

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩"+player1+" WINS!";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "DRAW!";
  } else {
    document.querySelector("h1").innerHTML = player2+" WINS! 🚩";
  }

}
