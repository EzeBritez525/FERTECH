// script-galeria.js

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".galeria-item");

  // Crear overlay del lightbox
  const overlay = document.createElement("div");
  overlay.id = "lightbox-overlay";
  overlay.innerHTML = "<img src='' alt='Vista previa'>";
  document.body.appendChild(overlay);

  // Evento para mostrar imagen ampliada
  imagenes.forEach(img => {
    img.addEventListener("click", () => {
      overlay.querySelector("img").src = img.src;
      overlay.style.display = "flex";
    });
  });

  // Cerrar lightbox al hacer clic fuera de la imagen
  overlay.addEventListener("click", e => {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
});

