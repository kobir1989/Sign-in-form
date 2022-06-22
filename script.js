const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordRepet = document.getElementById("password2");

///////////////////////////////////////////////////////////////////////

//Error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Success Message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Check required fields
function checkRequired(input) {
  input.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFeildName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Error Message: "to convart first word Uppercase"
function getFeildName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check user input length

function checkLengthUser(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFeildName(input)} Must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFeildName(input)} Must be less then ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//Valid email check

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//Valid password check
function checkPassMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password did not match");
  }
}

// Password length check

function checkPassLenght(input1, input2) {
  if (input1.value && input2.value.length < 8) {
    showError(input1, "Password must be at least 8 characters");
  }
}

//Submit Btn
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([userName, email, password, password2]);
  checkLengthUser(userName, 6, 15);
  checkEmail(email);
  checkPassMatch(password, password2);
  checkPassLenght(password, password2);
});
