"use strict";
const messageContainer = document.querySelector("#errormessagecontainer");

class Login {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.messageContainer = document.querySelector("#errormessagecontainer");
    this.loginButton = document.querySelector("#loginbutton");
    this.newUserButton = document.querySelector("#newuserbutton");
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = event.target.value;
    const password = event.target.value;

    const users = db.getAllUsers();

    const user = users.find((item) => {
      if (item.email === email && item.password === password) {
        return true;
      }
    });

    messageContainer.innerHTML = "";
    const p = document.createElement("p");
    if (!user) {
      p.textContent = "Email or passsword is incorrect";
    } else {
      p.textContent = `Hello ${user.name}!`;
    }

    messageContainer.appendChild(p);

    setTimeout(() => {
      location.assign("dashboard.html");
    }, 2000);
  }

  directNewUser() {
    setTimeout(() => {
      location.assign("signup.html");
    }, 1000);
  }
}

const login = new Login();

login.loginButton.addEventListener("click", login.handleSubmit);
login.newUserButton.addEventListener("click", login.directNewUser);
