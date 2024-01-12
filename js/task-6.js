const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const containerBox = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onCreateBox() {
  const inputValue = Number(inputEl.value);
  if (inputValue < 1 || inputValue > 100) {
    return alert(
      "Ooops, something go wrong!!! The value must be less than 100"
    );
  }
  destroyBoxes();
  createBoxes(inputValue);
}

function createBoxes(amount) {
  const rundomColor = getRandomHexColor;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";
    box.style.backgroundColor = rundomColor();
    containerBox.append(box);
  }
}

function destroyBoxes() {
  inputEl.value = "";
  containerBox.innerHTML = "";
}

function onDestroyBox() {
  destroyBoxes();
}

btnCreate.addEventListener("click", onCreateBox);
btnDestroy.addEventListener("click", onDestroyBox);
