const submitBtn = document.getElementById("submit");
const inputs = document.querySelectorAll(".input");
const email = document.getElementById("email");

submitBtn.addEventListener("click", validate);
submitBtn.addEventListener("click", validateEmail);

function validate(e) {
  e.preventDefault();
  inputs.forEach((input) => {
    if (input.value == "") {
      input.nextElementSibling.classList.add("active");
      input.classList.add("active");
    } else {
      input.nextElementSibling.classList.remove("active");
      input.classList.remove("active");
    }
  });
}

function validateEmail() {
  let reg = /^[^]+@[^]+\.[a-z]{2,3}$/;

  if (email.value.match(reg)) {
    email.nextElementSibling.classList.remove("active");
    email.classList.remove("active");
  } else {
    email.nextElementSibling.classList.add("active");
    email.classList.add("active");
  }
}
