const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordRepet = document.getElementById("password2");

///////////////////////////////////////////////////////////////////////

//error
function showError(input, message) {
  const formControl = input.parentElement;
  console.log(formControl);
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//success
function showSuccess(input) {
  const formControl = input.parentElement;
  console.log(formControl);
  formControl.className = "form-control success";
}

//valic email check

function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFeildName(input)} is required`);
    } else {
    }
  });
}

//
function getFeildName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([userName, email, password, passwordRepet]);
});
