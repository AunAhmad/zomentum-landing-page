const overlay = document.querySelector(".overlay-container");
console.log(overlay);

const openBtn = document.querySelector(".open-icon");

const closeBtn = document.querySelector(".close-icon");

openBtn.addEventListener("click", () => {
  overlay.classList.remove("close");
  overlay.classList.toggle("open");
});
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("open");
  overlay.classList.add("close");
});
