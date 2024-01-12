const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const spanEl = document.querySelector("#name-output");
console.log(spanEl);
inputEl.value.trim();

function inInput(event) {
  console.log(event);
  const inputVal = event.target.value;
  spanEl.textContent = inputVal;
}

inputEl.addEventListener("input", inInput);
