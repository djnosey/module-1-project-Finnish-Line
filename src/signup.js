"use strict";

class SignUp {
  constructor() {

    this.nameInput = document.querySelector("#name");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeatpassword");

    this.signUpButton = document.querySelector("#signupbutton");
    this.errorContainer = document.querySelector("#errormessagecontainer");
  }


  handleEmailInput = (event) => {
    const emailInput = event.target;
    const email = emailInput.value;
    validator.validateValidEmail(email);
    validator.validateUniqueEmail(email);
    this.setErrorMessages();
  };
  handlePasswordInput = (event) => {
    const passwordInput = event.target;
    const password = passwordInput.value;
    const repeatPasswordinput = this.repeatPasswordInput;
    const repeatPassword = repeatPasswordinput.value;
    validator.validatePassword(password);
    validator.validateRepeatPassword(password, repeatPassword);
    this.setErrorMessages();
  };
  handleRepeatPasswordInput = (event) => {
    const repeatPasswordInput = event.target;
    const repeatPassword = repeatPasswordInput.value;
    const passwordinput = this.passwordInput;
    const password = passwordinput.value;
    validator.validatePassword(password);
    validator.validateRepeatPassword(password, repeatPassword);
    this.setErrorMessages();
  };

  setErrorMessages() {
    this.errorContainer.innerHTML = "";
    const errorsObject = validator.getErrors();
    const errorsArray = Object.values(errorsObject);

    errorsArray.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item;
      this.errorContainer.appendChild(p);
    });
  }

  saveData = (event) => {
    event.preventDefault();

    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const repeatedPassword = this.repeatPasswordInput.value;

    const newUser = new User(name, email, password, repeatedPassword);

    console.log(newUser);

    //save to db >>>>
    db.saveNewUser(newUser);

    //clear the form
    this.nameInput.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";
    this.repeatPasswordInput.input = "";
  };

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
