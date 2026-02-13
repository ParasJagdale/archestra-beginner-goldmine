// Progress tracker functionality
(function () {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][id^="check"]',
  );
  const progressBar = document.getElementById("progress-bar");

  if (checkboxes.length && progressBar) {
    // Load saved progress
    checkboxes.forEach((checkbox, index) => {
      const saved = localStorage.getItem(`progress-${checkbox.id}`);
      if (saved === "true") {
        checkbox.checked = true;
      }
    });

    // Update progress bar
    updateProgress();

    // Listen for changes
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        localStorage.setItem(`progress-${this.id}`, this.checked);
        updateProgress();
      });
    });

    function updateProgress() {
      const total = checkboxes.length;
      const checked = Array.from(checkboxes).filter((cb) => cb.checked).length;
      const percentage = (checked / total) * 100;
      progressBar.style.width = percentage + "%";
    }
  }
})();
