const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.value.trim();

function inInput(event) {
  const inputVal = event.target.value.trim();
  const x = inputEl.value;
  const xUpdate = x.split("");
  console.log(xUpdate);
  if (inputVal === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = inputVal;
  }
}

inputEl.addEventListener("input", inInput);
