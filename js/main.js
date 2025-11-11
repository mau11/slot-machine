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

// Confetti source: https://www.kirilv.com/canvas-confetti/#continuous
function win(color) {
  // Continuous confetti for 5 seconds
  let end = Date.now() + 5 * 1000;

  let colors = [color, "#dededeff", "#333333ff"];

  function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }
  frame();
}

function spinReels(bet) {
  total -= bet;

  if (total === 0) {
    results.innerText = "YOU LOSE";
  } else {
    first.src = `images/${options[getRandomIndex()]}`;
    second.src = `images/${options[getRandomIndex()]}`;
    third.src = `images/${options[getRandomIndex()]}`;

    if (first.src === second.src && second.src === third.src) {
      smallBet.disabled = true;
      bigBet.disabled = true;

      const team = first.src.split("/").pop().split(".")[0];

      switch (team) {
        case "patriots":
          results.innerText = "PATRIOTS WIN";
          win("#092142ff");
          break;
        case "bruins":
          results.innerText = "BRUINS WIN";
          win("#f4bb47ff");
          break;
        case "red-sox":
          results.innerText = "RED SOX WIN";
          win("#ae3c3eff");
          break;
        default:
          results.innerText = "CELTICS WIN";
          win("#39814eff");
          break;
      }
    }
  }

  totalLeft.innerText = total;
}
