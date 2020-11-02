//general selectors for all pages

const menuIcon = document.querySelector("#hamburgericon");
const menu = document.querySelector("#hamburgercontainer");
const nameInput = document.querySelector("#name");
const repeatpasswordinput = document.querySelector("#repeatpassword");
const churches = document.querySelector("#hic1");

function saveChurch() {
  localStorage.set(
    "church",
    "http://open-api.myhelsinki.fi/v1/places/?tags_search=Church"
  );
  location.assign("/dashboard.html");
}

const menufunction = () => {
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
};

menuIcon.addEventListener("click", menufunction);
churches.addEventListener("click", saveChurch);
