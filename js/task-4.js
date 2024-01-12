const formEl = document.querySelector(".login-form");
console.log(formEl);
const emailValue = document.querySelector("textContent");
console.log(emailValue);

function onSubmit(event) {
  event.preventDefault();
  //   console.log(event.target.elements.email.value);
  const { email, password } = event.target.elements;
  if (!email.value.trim() || !password.value.trim()) {
    return alert("All form fields must be filled in");
  }

  console.log({ email: email.value.trim(), password: password.value.trim() });
  event.currentTarget.reset();
}

formEl.addEventListener("submit", onSubmit);
