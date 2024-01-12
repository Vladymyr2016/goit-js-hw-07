const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
console.log(document.body);
const bodyEl = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onColorChange(event) {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  spanEl.textContent = currentColor;
}

btnEl.addEventListener("click", onColorChange);
