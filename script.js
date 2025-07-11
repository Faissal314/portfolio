document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-section, .fade-item");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-delay");
          if (delay) {
            entry.target.style.setProperty('--delay', delay);
          }
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach(el => observer.observe(el));
});