const toggles = document.querySelectorAll("#theme-toggle, #theme-toggle-2");
const icons = document.querySelectorAll(
  "#theme-toggle img, #theme-toggle-icon-2"
);

function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.theme = mode;

  // swap icon
  if (mode === "dark") {
    themeIcon.src = "images/moon.svg";
    themeIcon.alt = "dark-mode-logo";
  } else {
    themeIcon.src = "images/sun.svg";
    themeIcon.alt = "light-mode-logo";
  }
}

// attach click events to both toggles
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "light" : "dark");
  });
});
// restore saved theme or default to light
const savedTheme = localStorage.theme || "light";
setTheme(savedTheme);
