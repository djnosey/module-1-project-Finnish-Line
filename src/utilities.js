const menuIcon = document.querySelector("#hamburgericon");
const menu = document.querySelector("#hamburgercontainer");

console.log(menuIcon);

const menufunction = () => {};

menuIcon.addEventListener("click", function () {
  console.log("clicked");

  if (menu.classList.contains("closed")) {
    menu.classList.remove("closed");
    menu.classList.add("open");
    menuIcon.classList.remove("closed");
    menuIcon.classList.add("open");
  } else {
    menu.classList.remove("open");
    menu.classList.add("closed");
    menuIcon.classList.remove("open");
    menuIcon.classList.add("closed");
  }
});
