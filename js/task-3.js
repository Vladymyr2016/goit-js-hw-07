const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const spanEl = document.querySelector("#name-output");
console.log(spanEl);
inputEl.value.trim();

function inInput(event) {
  // console.log(event);
  const inputVal = event.target.value;
  const x = inputEl.value;
  const xUpdate = x.split("");
  // console.log(xUpdate);
  const newX = xUpdate.every((value) => value === " ");
  console.log(newX);
  if (inputVal === "" || newX) {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = inputVal;
  }
}

inputEl.addEventListener("input", inInput);
