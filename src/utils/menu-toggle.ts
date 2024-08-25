document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(
    '[data-collapse-toggle="navbar-default"]',
  ) as HTMLButtonElement | null;
  const menu = document.getElementById(
    "navbar-default",
  ) as HTMLDivElement | null;

  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

      // Toggle the menu visibility
      menu.classList.toggle("hidden");

      // Update aria-expanded attribute
      menuButton.setAttribute("aria-expanded", !isExpanded ? "true" : "false");
    });

    // Optionally close the menu when a menu item is clicked (for mobile view)
    const menuItems = menu.querySelectorAll("a");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        menu.classList.add("hidden");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }
});
