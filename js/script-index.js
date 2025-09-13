document.addEventListener('DOMContentLoaded', () => {
  const modoBtn = document.getElementById('modoBtn');
  const cuerpo = document.body;

  if (!modoBtn) return; // Evitar errores si no se encuentra el botón

  // Verificar preferencia guardada
  const modoGuardado = localStorage.getItem('modo');
  if (modoGuardado === 'oscuro') {
    cuerpo.classList.remove('light-mode');
    cuerpo.classList.add('dark-mode');
    modoBtn.textContent = 'Modo Claro';
  } else {
    cuerpo.classList.remove('dark-mode');
    cuerpo.classList.add('light-mode');
    modoBtn.textContent = 'Modo Oscuro';
  }

  // Evento para cambiar modo
  modoBtn.addEventListener('click', () => {
    cuerpo.classList.toggle('dark-mode');
    cuerpo.classList.toggle('light-mode');
    const modoActual = cuerpo.classList.contains('dark-mode') ? 'oscuro' : 'claro';
    localStorage.setItem('modo', modoActual);
    modoBtn.textContent = modoActual === 'oscuro' ? 'Modo Claro' : 'Modo Oscuro';
  });
});