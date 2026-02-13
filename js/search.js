// Simple client-side search functionality
(function () {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  // Searchable content - this would be expanded with all page content
  const searchableContent = [
    {
      title: "Getting Started",
      url: "getting-started.html",
      description:
        "Learn what Archestra is and how to get started with MCP development",
      keywords: "archestra, mcp, getting started, introduction, setup",
    },
    {
      title: "MCP Basics",
      url: "mcp-basics.html",
      description: "Understanding the Model Context Protocol fundamentals",
      keywords: "mcp, model context protocol, basics, fundamentals, agent",
    },
    {
      title: "Tutorials",
      url: "tutorials.html",
      description: "Step-by-step tutorials for building MCP tools and servers",
      keywords: "tutorial, guide, step-by-step, examples, how-to",
    },
    {
      title: "Troubleshooting",
      url: "troubleshooting.html",
      description: "Common errors and how to fix them",
      keywords: "troubleshooting, errors, debug, fix, problems, issues",
    },
    {
      title: "Code Templates",
      url: "templates.html",
      description: "Ready-to-use MCP server and tool templates",
      keywords: "templates, code, examples, boilerplate, starter",
    },
    {
      title: "Best Practices",
      url: "best-practices.html",
      description: "Project ideas and best practices for building MCP systems",
      keywords: "best practices, project ideas, patterns, tips, guide",
    },
    {
      title: "Architecture",
      url: "architecture.html",
      description: "Deep dive into MCP architecture and agent orchestration",
      keywords: "architecture, design, system, orchestration, advanced",
    },
  ];

  if (searchInput && searchResults) {
    let debounceTimer;

    searchInput.addEventListener("input", function (e) {
      clearTimeout(debounceTimer);
      const query = e.target.value.toLowerCase().trim();

      if (query.length < 2) {
        searchResults.classList.add("hidden");
        return;
      }

      debounceTimer = setTimeout(() => {
        performSearch(query);
      }, 300);
    });

    // Close search results when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !searchInput.contains(e.target) &&
        !searchResults.contains(e.target)
      ) {
        searchResults.classList.add("hidden");
      }
    });

    function performSearch(query) {
      const results = searchableContent.filter((item) => {
        return (
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.keywords.toLowerCase().includes(query)
        );
      });

      if (results.length === 0) {
        searchResults.innerHTML =
          '<div class="p-4 text-gray-500 dark:text-gray-400">No results found</div>';
        searchResults.classList.remove("hidden");
        return;
      }

      const resultsHTML = results
        .map(
          (result) => `
                <a href="${result.url}" class="block p-4 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
                    <div class="font-semibold text-blue-600 dark:text-blue-400">${result.title}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">${result.description}</div>
                </a>
            `,
        )
        .join("");

      searchResults.innerHTML = resultsHTML;
      searchResults.classList.remove("hidden");
    }
  }
})();
