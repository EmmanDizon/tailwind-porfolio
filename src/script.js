const toggles = document.querySelectorAll("#theme-toggle, #theme-toggle-2");
const icons = document.querySelectorAll(
  "#theme-toggle img, #theme-toggle-2 img"
);

function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.theme = mode;

  // update all toggle icons
  icons.forEach((icon) => {
    if (mode === "dark") {
      icon.src = "images/moon.svg";
      icon.alt = "dark-mode-logo";
    } else {
      icon.src = "images/sun.svg";
      icon.alt = "light-mode-logo";
    }
  });
}

// attach click to both toggles
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "light" : "dark");
  });
});

// restore saved theme (default to light)
const savedTheme = localStorage.theme || "light";
setTheme(savedTheme);

//************MENU TOGGLE************************* */
const menuToggle = document.getElementById("menu-toggle");
const mainMenu = document.getElementById("main_menu");
const menuIcon = menuToggle.querySelector("img");
let menuOpen = false;

menuToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuIcon.src = "images/open-menu.svg"; // Make sure this file exists
    menuIcon.alt = "close-menu-icon";
  } else {
    menuIcon.src = "images/hamburger-menu.svg";
    menuIcon.alt = "menu-icon";
  }
});
