const mobileBtn = document.querySelector(".header__ham-btn");
const menu = document.querySelector(".header__nav-list");
const menuItems = document.querySelectorAll(".header__nav-link");

function toggleMenu() {
  if (menu.classList.contains("is-active")) {
    this.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
    this.setAttribute("aria-expanded", "true");
  }
}

mobileBtn.addEventListener("click", toggleMenu);

menuItems.forEach((item) => item.addEventListener("click", toggleMenu));
