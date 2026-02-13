// Copy to clipboard functionality for code blocks
(function () {
  // Add copy buttons to all code blocks
  document.addEventListener("DOMContentLoaded", function () {
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach((block) => {
      // Wrap in a container if not already
      if (!block.parentElement.classList.contains("code-block")) {
        const wrapper = document.createElement("div");
        wrapper.className = "code-block relative";
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
      }

      // Add copy button
      const button = document.createElement("button");
      button.className = "copy-button";
      button.textContent = "Copy";
      button.addEventListener("click", function () {
        const code = block.textContent;

        navigator.clipboard
          .writeText(code)
          .then(() => {
            button.textContent = "Copied!";
            button.classList.add("copied");

            setTimeout(() => {
              button.textContent = "Copy";
              button.classList.remove("copied");
            }, 2000);
          })
          .catch((err) => {
            console.error("Failed to copy:", err);
            button.textContent = "Error";
            setTimeout(() => {
              button.textContent = "Copy";
            }, 2000);
          });
      });

      block.parentElement.appendChild(button);
    });
  });
})();
