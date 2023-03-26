const bunky = document.querySelectorAll(".bunka");

const restartBtn = document.querySelector("#restart");
const vyherniText = document.querySelector("#vitezText");

const vyherniKombinace = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let pole = ["", "", "", "", "", "", "", "", ""];

let naRade = "X";
let playing = true;
let indexBunky;

init();

function init() {
  console.log(bunky);

  bunky.forEach((bunka) => {
    bunka.addEventListener("click", clicked);
  });

  restartBtn.addEventListener("click", restart);
  vyherniText.textContent = naRade;
}

function clicked() {
  console.log("kliknuto test");
  const indexBunky = this.getAttribute("index");
  console.log(indexBunky);

  if (pole[indexBunky] != "" || playing == false) {
    return;
  }

  updateCell(this, indexBunky);
  checkWinner();
}
function updateCell(bunka, indexBunky) {
  pole[indexBunky] = naRade;
  bunka.textContent = naRade;
}

function changePlayer() {
  naRade = naRade == "X" ? "O" : "X";
  vyherniText.textContent = naRade;
}

function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < vyherniKombinace.length; i++) {
    const condition = vyherniKombinace[i];
    const cellA = vyherniKombinace[condition[0]];
    const cellB = vyherniKombinace[condition[1]];
    const cellC = vyherniKombinace[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    vyherniText.textContent = "vyhrano";
    playing = false;
  } else if (!pole.includes("")) {
    vyherniText.textContent = "remíza";
  } else {
    changePlayer();
  }
}

function restart() {
  naRade = "X";
  pole = ["", "", "", "", "", "", "", "", ""];
  vyherniText.textContent = "X";
  bunky.forEach((bunka) => (bunka.textContent = ""));
  playing = true;
}
