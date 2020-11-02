"use strict";

class SignUp {
  constructor() {
    //inputs

    this.nameInput = document.querySelector("#name");
    this.EmailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeatpassword");

    this.signUpButton = document.querySelector("#signupbutton");
    this.errorContainer = document.querySelector("#errormessagecontainer");
  }

  //handle the inputs

  handleEmailInput = () => {};
  handlePasswordInput = () => {};
  handleRepeatPasswordInput = () => {};

  //handle the sending of data on submit
  saveData = () => {};

  //event listeners

  addlisteners = () => {
    this.EmailInput.addEventListener("input", this.handleEmailInput);
    this.passwordInput.addEventListener("input", this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener(
      "input",
      this.handleRepeatPasswordInput
    );
    this.signUpButton.addEventListener("click", this.saveData);
  };
}

const signUp = new SignUp();
