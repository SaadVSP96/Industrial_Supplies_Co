document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".navbar ul");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
