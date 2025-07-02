// Smooth scroll for anchor links
const links = document.querySelectorAll("a[href^='#']");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Toggle dropdowns on smaller devices (basic support)
document.querySelectorAll('.dropdown').forEach(drop => {
  drop.addEventListener('click', function (e) {
    const menu = this.querySelector('.dropdown-menu');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
    e.stopPropagation();
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.style.display = 'none';
  });
});
