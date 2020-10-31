"use strict";

const menuIcon = document.querySelector("#hamburgericon");
menuIcon.addEventListener("click", openfunction);

function openfunction() {
  menuIcon.classList.remove("closed");
  menuIcon.classList.add("open");
}

console.log("hello", menuIcon);

console.log("hello");
