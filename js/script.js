const mobileBtn = document.querySelector(".header__ham-btn");
const menu = document.querySelector(".header__nav-list");

mobileBtn.addEventListener("click", function () {
  if (menu.classList.contains("is-active")) {
    this.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
    this.setAttribute("aria-expanded", "true");
  }
});
