// dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll + Active nav highlight
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth"
    });
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
