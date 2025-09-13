// script-servicios.js

document.addEventListener("DOMContentLoaded", () => {
  const servicios = [
    { nombre: "AURICULARES", imagen: "../galeria/producto (20).jpg" },
    { nombre: "FUNDAS", imagen: "../galeria/producto (1).jpg" },
    { nombre: "RELOJES", imagen: "../galeria/producto (30).jpg" },
    { nombre: "CARGADORES", imagen: "../galeria/producto (25).jpg" },
    { nombre: "GAMER", imagen: "../galeria/producto (33).jpg" },
    { nombre: "ADAPTADORES", imagen: "../galeria/producto (29).jpg" },
    { nombre: "MOUSE", imagen: "../galeria/producto (5).jpg" },
    { nombre: "TECLADO", imagen: "../galeria/producto (6).jpg" },
    { nombre: "SERVICIO TÉCNICO", imagen: "../galeria/producto (22).jpg" }
  ];

  const contenedor = document.getElementById("serviciosAccordion");

  // Crear overlay del lightbox
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox-overlay";
  lightbox.style.display = "none";
  lightbox.style.position = "fixed";
  lightbox.style.top = 0;
  lightbox.style.left = 0;
  lightbox.style.width = "100vw";
  lightbox.style.height = "100vh";
  lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  lightbox.style.display = "flex";
  lightbox.style.alignItems = "center";
  lightbox.style.justifyContent = "center";
  lightbox.style.zIndex = "9999";
  lightbox.innerHTML = `<img src='' alt='Ampliación' style='max-width: 80%; max-height: 80%; border-radius: 10px;'>`;
  document.body.appendChild(lightbox);
  lightbox.style.display = "none";

  servicios.forEach((servicio, index) => {
    const item = document.createElement("div");
    item.classList.add("accordion-item");
    item.innerHTML = `
      <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
          ${servicio.nombre}
        </button>
      </h2>
      <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#serviciosAccordion">
        <div class="accordion-body text-center">
          <img src="${servicio.imagen}" class="img-fluid rounded shadow servicio-miniatura" style="max-height: 120px; cursor: pointer;">
        </div>
      </div>
    `;
    contenedor.appendChild(item);
  });

  // Mostrar lightbox al hacer clic en miniatura
  contenedor.addEventListener("click", (e) => {
    if (e.target.classList.contains("servicio-miniatura")) {
      lightbox.querySelector("img").src = e.target.src;
      lightbox.style.display = "flex";
    }
  });

  // Ocultar lightbox al hacer clic fuera de la imagen
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
