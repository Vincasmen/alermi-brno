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

/* AIzaSyCT8nybTz-LNaM6mMwZufbwwgvE-ItlJ-k */

/* let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap(); */
