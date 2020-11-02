"use strict";

class Db {
  getAllUsers() {
    const usersString = localStorage.getItem("users");
    const usersArray = JSON.parse(usersString);

    if (usersArray === null) {
      return [];
    } else {
      return usersArray;
    }
  }

  saveNewUser(newUser) {
    const usersArray = this.getAllUsers();

    const updatedArray = [...usersArray, newUser];

    const updatedUsersString = JSON.stringify(updatedArray);

    localStorage.setItem("users", updatedUsersString);
  }
}
