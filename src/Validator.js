"use strict";

class Validator {
  constructor() {
    this.invalidEmailError = "Enter a valid email";
    this.emailExistsError = "The email address already exists";
    this.passwordError = "Password should be 6 characters long";
    this.repeatPasswordError = "The passwords dont match";

    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError,
    };
  }

  validateValidEmail(email) {
    if (this.emailSyntaxIsValid(email)) {
      delete this.errors.invalidEmailError;
    } else {
      this.errors.invalidEmailError = this.invalidEmailError;
    }
  }

  emailSyntaxIsValid = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    const emailIsValid = emailRegex.test(email);

    return emailIsValid;
  };

  validateUniqueEmail(email) {
    const users = db.getAllUsers();

    let emailUnique = true;

    users.forEach((item) => {
      if (item.email === email) {
        emailUnique = false;
      }
    });

    if (emailUnique) {
      delete this.errors.emailExistsError;
    } else {
      this.errors.emailExistsError = this.emailExistsError;
    }
  }

  validatePassword(password) {
    if (password.length >= 6) {
      delete this.errors.passwordError;
    } else {
      this.errors.passwordError = this.passwordError;
    }
  }

  validateRepeatPassword(password, repeatPassword) {
    if (password === repeatPassword) {
      delete this.errors.repeatPasswordError;
    } else this.errors.repeatPasswordError = this.repeatPasswordError;
  }

  getErrors() {
    return this.errors;
  }
}

const validator = new Validator();
