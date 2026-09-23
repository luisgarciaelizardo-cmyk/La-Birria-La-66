// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Lightbox para el menú y la galería
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll("[data-lightbox]").forEach((el) => {
  el.addEventListener("click", () => {
    lightboxImg.src = el.dataset.lightbox;
    lightboxImg.alt = el.dataset.alt || "";
    lightbox.showModal();
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});

document.getElementById("year").textContent = new Date().getFullYear();
