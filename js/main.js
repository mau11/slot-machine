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
first.innerText = "a";
second.innerText = "b";
third.innerText = "c";

// Add event listeners to buttons
smallBet.onclick = () => handleClick(5);
bigBet.onclick = () => handleClick(50);

// Create randomizer
const options = ["a", "b", "c", "d", "e"]; // change to image paths
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
    first.innerText = options[getRandomIndex()];
    second.innerText = options[getRandomIndex()];
    third.innerText = options[getRandomIndex()];

    if (
      first.innerText === second.innerText &&
      second.innerText === third.innerText
    ) {
      smallBet.disabled = true;
      bigBet.disabled = true;
      results.innerText = "YOU WON";
    }
  }

  totalLeft.innerText = total;
}
