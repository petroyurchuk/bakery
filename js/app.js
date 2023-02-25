const burgerBtn = document.querySelector(".header__burger-btn");
const header = document.querySelector(".header");

burgerBtn.addEventListener("click", function () {
  header.classList.toggle("open");
});
