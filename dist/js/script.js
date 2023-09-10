// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  setTimeout(() => {
    navMenu.classList.toggle("muncul");
  }, 100);
});


// Klik diluar hamburger
document.addEventListener("click", function (e) {
  if (
    e.target !== hamburger &&
    !hamburger.contains(e.target) &&
    e.target !== navMenu &&
    !navMenu.contains(e.target)
  ) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.remove("muncul");
    navMenu.classList.add("hidden");
  }
});

// Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  darkToggle.checked ? (html.classList.add("dark"), localStorage.theme = 'dark') : (html.classList.remove("dark"), localStorage.theme = 'light');
});


// Pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}