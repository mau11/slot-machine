// Set variables
const totalLeft = document.querySelector("span");
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const smallBet = document.querySelector("#smallBet");
const bigBet = document.querySelector("#bigBet");
const results = document.querySelector("p");

// Set initial values
let total = 1000;
totalLeft.innerText = total;
first.src = "images/celtics.png";
second.src = "images/celtics.png";
third.src = "images/celtics.png";

// Add event listeners to buttons
smallBet.onclick = () => handleClick(5);
bigBet.onclick = () => handleClick(50);

// Create randomizer
const options = [
  "bruins.png",
  "celtics.png",
  "patriots.png",
  "red-sox.png",
  "celtics-logo.png",
];
const count = options.length;
const getRandomIndex = () => Math.floor(Math.random() * count);

function handleClick(bet) {
  if (total - bet < 50) {
    bigBet.disabled = true;
  }

  if (total - bet < 5) {
    smallBet.disabled = true;
  }
  spinReels(bet);
}

function spinReels(bet) {
  total -= bet;

  if (total === 0) {
    total = "YOU LOSE";
  } else {
    first.src = `images/${options[getRandomIndex()]}`;
    second.src = `images/${options[getRandomIndex()]}`;
    third.src = `images/${options[getRandomIndex()]}`;

    if (first.src === second.src && second.src === third.src) {
      smallBet.disabled = true;
      bigBet.disabled = true;
      results.innerText = "YOU WON";
    }
  }

  totalLeft.innerText = total;
}
