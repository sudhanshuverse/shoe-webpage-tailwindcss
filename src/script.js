const hamburger = document.querySelector("#hamburger");
const linkContainer = document.querySelector("#link-container");

hamburger.addEventListener("click", () => {
  const current = hamburger.getAttribute("src");
  if (current === "./assets/icons/hamburger.svg") {
    hamburger.setAttribute("src", "./assets/icons/close.svg");
  } else {
    hamburger.setAttribute("src", "./assets/icons/hamburger.svg");
  }
  linkContainer.classList.toggle("hidden");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    linkContainer.classList.add("hidden");
    hamburger.setAttribute("src", "./assets/icons/hamburger.svg");
  }
});
