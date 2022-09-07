import { displayMessage } from "./ui/displayMessage.js";

// variables
const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const messageForm = document.querySelector("#message");
const messageFormError = document.querySelector("#messageError");

// checks length
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// checks email
function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

// form validation function
function validateForm() {
  event.preventDefault();

  try {
    if (checkLength(name.value, 5)) {
      nameError.style.display = "none";
    } else {
      nameError.style.display = "block";
    }

    if (checkLength(subject.value, 15)) {
      subjectError.style.display = "none";
    } else {
      subjectError.style.display = "block";
    }

    if (checkLength(messageForm.value, 25)) {
      messageFormError.style.display = "none";
    } else {
      messageFormError.style.display = "block";
    }

    if (checkEmail(email.value)) {
      emailFormError.style.display = "none";
    } else {
      emailFormError.style.display = "block";
    }

    console.log("The form has been sumbitted");
  } catch (error) {
    console.log(error);
  }
}
