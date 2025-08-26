const toggles = document.querySelectorAll("#theme-toggle, #theme-toggle-2");

function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.theme = mode;
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
const menuIconSpan = document.getElementById("menu-icon");
let menuOpen = false;

const hamburgerSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 transition-transform duration-300 ease-in-out rotate-0">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
`;
const openMenuSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" role="img" aria-label="Open menu" class="size-10 transition-transform duration-300 ease-in-out rotate-90">
    <title>Open menu</title>
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
`;

menuToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
  menuOpen = !menuOpen;
  menuIconSpan.innerHTML = menuOpen ? openMenuSVG : hamburgerSVG;
});
