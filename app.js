let bunky = document.querySelectorAll(".bunka");

let restartBtn = document.querySelector("#restart");
let vyherniText = document.querySelector("#vitezText");

pole = ["", "", "", "", "", "", "", "", ""];

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
  vyherniText.textContent = "---------------";
}

function clicked() {
  console.log("kliknuto test");
  indexBunky = this.getAttribute("index");
  console.log(indexBunky);

  if (pole[indexBunky] != "" || playing == false) {
    pole[indexBunky] = naRade;
    this.textContent = naRade;
  }
}

function checkWinner() {}

function restart() {}
