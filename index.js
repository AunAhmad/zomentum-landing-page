const overlay = document.querySelector(".overlay-container");
console.log(overlay);

const openBtn = document.querySelector(".open-icon");

const closeBtn = document.querySelector(".close-icon");

openBtn.addEventListener("click", () => {
  overlay.classList.toggle("open");
});
closeBtn.addEventListener("click", () => {
  overlay.classList.toggle("open");
});
