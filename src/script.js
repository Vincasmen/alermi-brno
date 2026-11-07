const navToggle = document.getElementById("navbar-toggle");
const navMenu = document.getElementById("navbar-default");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navMenu.classList.toggle("hidden");
});

// Po kliknutí na odkaz v mobilním menu menu zavřít
navMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.add("hidden");
  })
);
