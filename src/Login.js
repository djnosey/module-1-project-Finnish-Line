"use strict";
// const messageContainer = document.querySelector("#errormessagecontainer");
// const emailInput = document.querySelector("#email");
// const passwordInput = document.querySelector("#password");
// const newUserButton = document.querySelector("#newuserbutton");

class Login {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.messageContainer = document.querySelector("#errormessagecontainer");
    this.loginButton = document.querySelector("#loginbutton");
    this.newUserButton = document.querySelector("#newuserbutton");
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    const users = db.getAllUsers();
    console.log(users);

    const user = users.find((item) => {
      if (item.email === email && item.password === password) {
        return true;
      }
    });

    this.messageContainer.innerHTML = "";
    const p = document.createElement("p");
    if (!user) {
      p.textContent = "Email or passsword is incorrect";
    } else {
      setTimeout(() => {
        location.assign("dashboard.html");
      }, 3000);
      p.textContent = `Hello ${user.name}!`;
    }

    this.messageContainer.appendChild(p);
  };

  directNewUser(e) {
    e.preventDefault();
    location.assign("./signup.html");
  }
}

const login = new Login();

login.loginButton.addEventListener("click", login.handleSubmit);
newUserButton.addEventListener("click", login.directNewUser);
