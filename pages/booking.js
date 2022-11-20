const form = document.querySelector("#form");
const usernameInput = document.querySelector("#username");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const selectInput = document.querySelector("#modal");
const descriptionInput = document.getElementById("desc");

form.addEventListener("submit", (event) => {
  validateForm();
  if (isFormValid() == true) {
    form.submit();
  } else {
    event.preventDefault();
  }
});

function isFormValid() {
  const inputContainers = document.querySelectorAll(".input-group");
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}

function validateForm() {
  //USERNAME
  if (usernameInput.value.trim() == "") {
    setError(usernameInput, "Name can not be empty");
  } else if (
    usernameInput.value.trim().length < 2 ||
    usernameInput.value.trim().length > 20
  ) {
    setError(usernameInput, "Name must be min 2 and max 20 charecters");
  } else {
    setSuccess(usernameInput);
  }
  //LASTNAME
  if (lastNameInput.value.trim() == "") {
    setError(lastNameInput, "Last Name can not be empty");
  } else if (
    lastNameInput.value.trim().length < 2 ||
    usernameInput.value.trim().length > 15
  ) {
    setError(lastNameInput, "Last Name must be min 2 and max 15 charecters");
  } else {
    setSuccess(lastNameInput);
  }

  //EMAIL
  if (emailInput.value.trim() == "") {
    setError(emailInput, "Provide email address");
  } else if (isEmailValid(emailInput.value)) {
    setSuccess(emailInput);
  } else {
    setError(emailInput, "Provide valid email address");
  }
  //PHONE
  if (phoneInput.value.trim() == "" || isNaN(phoneInput.value)) {
    setError(phoneInput, "Phone Input must contain Number");
  } else if (phoneInput.value.trim().length < 9) {
    setError(phoneInput, "Phone number must be min 8 Digit");
  } else {
    setSuccess(phoneInput);
  }

  //SELECT MODAL
  if (selectInput.value == "") {
    setError(selectInput, "Please choose your modal");
  } else {
    setSuccess(selectInput);
  }
  
  //DESCRIPTION

  if (
    descriptionInput.value.trim().length < 10 ||
    descriptionInput.value.trim().length > 250
  ) {
    setError(
      descriptionInput,
      "Description Minimum 10 and Maximum 250 characters long"
    )
  } else {
    setSuccess(descriptionInput);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
  const paragraph = parent.querySelector("p");
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}

function isEmailValid(email) {
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return reg.test(email);
}
