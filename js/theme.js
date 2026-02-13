// Theme toggle functionality
(function () {
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "dark") {
    html.classList.add("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      html.classList.toggle("dark");

      // Save preference
      const theme = html.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", theme);
    });
  }
})();
