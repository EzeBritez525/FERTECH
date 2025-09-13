
  emailjs.init('Y8xA9fTu5rlUT4-QA');

  const btn = document.getElementById('button');
  const form = document.getElementById('form');
  const respuesta = document.getElementById('formRespuesta');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = form.nombre.value.trim();
    const apellido = form.apellido.value.trim();
    const email = form.email.value.trim();
    const observaciones = form.observaciones.value.trim() || 'Sin observaciones.';

    // Validación campos obligatorios
    if (!nombre || !apellido || !email) {
      respuesta.textContent = 'Por favor complete todos los campos obligatorios.';
      respuesta.className = 'text-danger';
      return;
    }

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      respuesta.textContent = 'Por favor ingrese un correo electrónico válido.';
      respuesta.className = 'text-danger';
      return;
    }

    // Validación de al menos un checkbox
    const checkboxes = form.querySelectorAll("input[name='areas']:checked");
    if (checkboxes.length === 0) {
      respuesta.textContent = 'Por favor seleccione al menos un aspecto a evaluar.';
      respuesta.className = 'text-danger';
      return;
    }

    // Validación de radio button seleccionado
    const calificacionSeleccionada = form.querySelector("input[name='calificacion']:checked");
    if (!calificacionSeleccionada) {
      respuesta.textContent = 'Por favor seleccione una calificación del servicio.';
      respuesta.className = 'text-danger';
      return;
    }

    // Procesar datos válidos
    const areasSeleccionadas = Array.from(checkboxes).map(cb => cb.value).join(', ');
    const calificacion = calificacionSeleccionada.value;

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_k4sle6o';

    emailjs.send(serviceID, templateID, {
      nombre,
      apellido,
      email,
      observaciones,
      areas: areasSeleccionadas,
      calificacion
    }).then(() => {
      btn.value = 'Enviar';
      respuesta.textContent = '¡Mensaje enviado correctamente!';
      respuesta.className = 'text-success';
      form.reset();
    }, (err) => {
      btn.value = 'Enviar';
      respuesta.textContent = 'Error al enviar. Intente nuevamente.';
      respuesta.className = 'text-danger';
      console.error(err);
    });
  });

