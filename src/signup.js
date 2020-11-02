"use strict";

class SignUp {
  constructor() {
    //inputs

    this.nameInput = document.querySelector("#name");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeatpassword");

    this.signUpButton = document.querySelector("#signupbutton");
    this.errorContainer = document.querySelector("#errormessagecontainer");
  }

  //handle the inputs

  handleEmailInput = (event) => {
    const emailInput = event.target;
    const email = emailInput.value;
  };
  handlePasswordInput = (event) => {
    const passwordInput = event.target;
    const password = passwordInput.value;
  };
  handleRepeatPasswordInput = (event) => {
    const repeatPasswordInput = event.target;
    const repeatPassword = repeatPasswordInput.value;
  };

  //handle the sending of data on submit
  saveData = (event) => {
    event.preventDefault();

    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const repeatedPassword = this.repeatPasswordInput.value;

    const newUser = new User(name, email, password, repeatedPassword);

    console.log(newUser);

    //save to db >>>>

    //clear the form
    this.nameInput.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";
    this.repeatPasswordInput.input = "";
  };

  //event listeners

  addlisteners = () => {
    this.emailInput.addEventListener("input", this.handleEmailInput);
    this.passwordInput.addEventListener("input", this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener(
      "input",
      this.handleRepeatPasswordInput
    );
    this.signUpButton.addEventListener("click", this.saveData);
  };
}

//creates an instance of the class
const signUp = new SignUp();

window.addEventListener("load", signUp.addlisteners);
