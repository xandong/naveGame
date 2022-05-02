const gameSpace = document.querySelector("#main");
const notifySpace = document.querySelector("#notify");
const btnUp = document.querySelector("#arrow-up");
const btnDown = document.querySelector("#arrow-down");
const btnFire = document.querySelector("#crosshair");

let player = document.querySelector("#player");
let refem = document.querySelector("#refem");
let inimigo1 = document.querySelector("#inimigo1");
let inimigo2 = document.querySelector("#inimigo2");

const codesAccepts = ["KeyW", "KeyS", "KeyK"];
let hasStarted = false,
  isEndGame = false,
  simulatorLife = 10,
  life = simulatorLife;

function verifyCode(event) {
  if (codesAccepts.includes(event)) return event;
  else return (event = event.code);
}

function main(event) {
  event = verifyCode(event);
  if (!codesAccepts.includes(event)) return;

  if (simulatorLife === 0 && hasStarted === true && isEndGame === false)
    return endGame(); // APOS CRIAR GAME, REMOVER simulatorLife

  if (hasStarted) return game(event);
  else if (event === "KeyK") {
    if (isEndGame === false) return start(event);
    else return reset();
  }
}

function start(event) {
  console.log("Start " + event);
  hasStarted = true;
  notifySpace.style.display = "none";

  createElements();

  return game(event);
}

function createElements() {
  gameSpace.appendChild((player = createChild("player", player)));
  gameSpace.appendChild((refem = createChild("refem", refem)));
  gameSpace.appendChild((inimigo1 = createChild("inimigo1", inimigo1)));
  gameSpace.appendChild((inimigo2 = createChild("inimigo2", inimigo2)));
}

function createChild(name, element) {
  element = document.createElement("img");
  element.setAttribute("id", name);
  return element;
}

function game(event) {
  simulatorLife--; // SIMULANDO O JOGO ATE ACABAR A VIDA DE 10
  console.log("Game " + event);
}

function reset() {
  hasStarted = false;
  isEndGame = false;
  notifySpace.innerHTML = "Atire para começar";

  gameSpace.removeChild(player);
  gameSpace.removeChild(refem);
  gameSpace.removeChild(inimigo1);
  gameSpace.removeChild(inimigo2);
}

function endGame() {
  simulatorLife = 10;
  console.log("DENTRO DO ENDGAME");
  (isEndGame = true), (hasStarted = false);
  notifySpace.innerHTML = "Atire para resetar";
  notifySpace.style.display = "";
}

function clickBtnUp() {
  main("KeyW");
}
function clickBtnDown() {
  main("KeyS");
}
function clickBtnFire() {
  main("KeyK");
}

document.addEventListener("keydown", main, false);
btnUp.addEventListener("click", clickBtnUp, false);
btnDown.addEventListener("click", clickBtnDown, false);
btnFire.addEventListener("click", clickBtnFire, false);
