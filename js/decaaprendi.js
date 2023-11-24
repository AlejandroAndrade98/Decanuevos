document.addEventListener('DOMContentLoaded', function () {
  const tarjetas = document.querySelectorAll('.tarjeta-de-aprendizaje');
  const botonSeleccionar = document.getElementById('boton-seleccionar-aprendizaje');
  const seleccionAprendizaje = document.getElementById('seleccion-aprendizaje');
  const opcion1 = document.getElementById('CUBE');
  const opcion2 = document.getElementById('Cestas');
  const opcion3 = document.getElementById('Básicos-de-la-sección');
  const tarjetasCube = document.querySelectorAll('.tarjetas-apartado-cube');
  const seccionesContenido = document.querySelectorAll('section[id^="contenido-"]');

  // Variable para almacenar la sección seleccionada en CUBE
  let seccionSeleccionadaCube = null;

  // Función para manejar el clic en las tarjetas de aprendizaje
  function handleTarjetaClick(tarjeta) {
    // Remover la clase 'selected' de todas las tarjetas
    tarjetas.forEach(t => t.classList.remove('selected'));

    // Agregar la clase 'selected' solo a la tarjeta clicada
    tarjeta.classList.add('selected');

    // Mostrar la sección correspondiente al hacer clic en la tarjeta
    const seccionId = tarjeta.getAttribute('for');
    showSection(seccionId);
  }

  // Función para manejar el clic en las tarjetas de apartados en CUBE
  function handleTarjetasCubeClick(tarjeta) {
    // Remover la clase 'selected' de todas las tarjetas Cube
    tarjetasCube.forEach(t => t.classList.remove('selected'));

    // Agregar la clase 'selected' solo a la tarjeta clicada
    tarjeta.classList.add('selected');

    // Almacenar la sección correspondiente al hacer clic en la tarjeta
    seccionSeleccionadaCube = tarjeta.getAttribute('for');
  }

  // Función para mostrar la sección correspondiente
  function showSection(seccionId) {
    seccionesContenido.forEach(seccion => {
      seccion.style.display = seccion.id === `contenido-${seccionId}` ? 'flex' : 'none';
    });
  }

  // Agregar evento de clic a cada tarjeta de aprendizaje
  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', function () {
      handleTarjetaClick(tarjeta);
    });

    tarjeta.addEventListener('mouseenter', function () {
      tarjeta.classList.add('hover-effect');
    });

    tarjeta.addEventListener('mouseleave', function () {
      tarjeta.classList.remove('hover-effect');
    });
  });

  // Agregar evento de clic al botón de seleccionar
  botonSeleccionar.addEventListener('click', function () {
    // Ocultar el elemento de selección de aprendizaje
    seleccionAprendizaje.style.display = 'none';

    // Verificar qué opción ha sido seleccionada y mostrar el contenido correspondiente
    if (opcion1.checked) {
      showSection('cube');
    } else if (opcion2.checked) {
      showSection('cestas');
    } else if (opcion3.checked) {
      showSection('basicos');
    }
  });

  // Agregar evento de clic a cada tarjeta Cube
  tarjetasCube.forEach(tarjetaCube => {
    tarjetaCube.addEventListener('click', function () {
      handleTarjetasCubeClick(tarjetaCube);
    });

    tarjetaCube.addEventListener('mouseenter', function () {
      tarjetaCube.classList.add('hover-effect');
    });

    tarjetaCube.addEventListener('mouseleave', function () {
      tarjetaCube.classList.remove('hover-effect');
    });
  });

  // Agregar eventos de clic para los elementos del dashboard y del apartado CUBE
  const dashboard = document.querySelector('.tarjetas-apartado-cube[for="apartado-cube-dashboard"]');
  dashboard.addEventListener('click', function () {
    // Al hacer clic en Dashboard, mostrar su sección correspondiente
    showSection('dashboard');
    // Asignar la sección seleccionada a Dashboard
    seccionSeleccionadaCube = 'dashboard';
  });

  // (Agrega eventos para los demás elementos del dashboard y CUBE)

  // Obtener el botón de seleccionar de CUBE
  const botonSeleccionarCube = document.getElementById('boton-seleccionar-CUBE');
  botonSeleccionarCube.addEventListener('click', function () {
    // Mostrar la sección correspondiente a la opción seleccionada en CUBE
    showSection(seccionSeleccionadaCube);
  });
});
