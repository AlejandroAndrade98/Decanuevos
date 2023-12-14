document.addEventListener('DOMContentLoaded', function () {
  const tarjetas = document.querySelectorAll('.tarjeta-de-aprendizaje');
  const botonSeleccionar = document.getElementById('boton-seleccionar-aprendizaje');
  const seleccionAprendizaje = document.getElementById('seleccion-aprendizaje');
  const opcion1 = document.getElementById('CUBE');
  const opcion2 = document.getElementById('Cestas');
  const opcion3 = document.getElementById('Básicos-de-la-sección');
  const tarjetaDashboard = document.getElementById('apartado-cube-dashboard');
  const tarjetaComercio = document.getElementById('apartado-cube-comercio');
  const tarjetaCatalogo = document.getElementById('apartado-cube-catalogo');
  const tarjetaGestionUsuario = document.getElementById('apartado-cube-gestion-usuario');
  const tarjetaCesta = document.getElementById('apartado-cube-cesta');
  const tarjetaPedido = document.getElementById('apartado-cube-pedido');
  const tarjetaFlujoMercancias = document.getElementById('apartado-cube-flujo-mercancias');
  const tarjetaCestaImpresion = document.getElementById('apartado-cube-cesta-impresion');
  const tarjetaGestionBackoffice = document.getElementById('apartado-cube-gestion-backoffice');
  const seccionesContenido = document.querySelectorAll('section[id^="contenido-"]');
  const botonesInfo = document.querySelectorAll('.tarjeta-Dashboard button');
 


   let seleccionActual = null;

  // Función para manejar el clic en las tarjetas de aprendizaje
  function handleTarjetaClick(tarjeta, seccionId) {
    // Ocultar todas las secciones
    seccionesContenido.forEach(seccion => {
      seccion.style.display = 'none';
    });

    // Mostrar la sección correspondiente al hacer clic en la tarjeta
    document.getElementById(`contenido-${seccionId}`).style.display = 'flex';

    // Actualizar la selección actualatrás
    seleccionActual = seccionId;
  }

  // Agregar evento de clic a cada tarjeta de aprendizaje
  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', function () {
      const seccionId = tarjeta.getAttribute('for');
      handleTarjetaClick(tarjeta, seccionId);
    });
  });

  // Agregar evento de clic al botón de seleccionar
  botonSeleccionar.addEventListener('click', function () {
    // Ocultar el elemento de selección de aprendizaje
    seleccionAprendizaje.style.display = 'none';

    // En este punto, seleccionActual debería contener la sección seleccionada
  });

  // Función para manejar el clic en los botones de retroceso
  function handleInicioClick() {
    // Ocultar todas las secciones
    seccionesContenido.forEach(seccion => {
      seccion.style.display = 'none';
    });

    // Mostrar la selección anterior
    seleccionAprendizaje.style.display = 'flex';
    seleccionActual = null;
  }

  // Agregar evento de clic a los botones de retroceso
  document.querySelectorAll('[id^="boton-Inicio"]').forEach(botonInicio => {
    botonInicio.addEventListener('click', handleInicioClick);
  });

  // Función para manejar el clic en las tarjetas de aprendizaje
  function handleTarjetaClick(tarjeta, seccionId) {
    // Remover la clase 'selected' de todas las tarjetas
    tarjetas.forEach(t => t.classList.remove('selected'));

    // Agregar la clase 'selected' solo a la tarjeta clicada
    tarjeta.classList.add('selected');

    // Mostrar la sección correspondiente al hacer clic en la tarjeta
    showSection(seccionId);
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
      const seccionId = tarjeta.getAttribute('for');
      handleTarjetaClick(tarjeta, seccionId);
    });

    tarjeta.addEventListener('mouseenter', function () {
      tarjeta.classList.add('hover-effect');
    });

    tarjeta.addEventListener('mouseleave', function () {
      tarjeta.classList.remove('hover-effect');
    });
  });

  // Agregar evento de clic a la tarjeta de Dashboard
  tarjetaDashboard.addEventListener('click', function () {
    showSection('dashboard');
  });

  // Agregar evento de clic a la tarjeta de Comercio
  tarjetaComercio.addEventListener('click', function () {
    showSection('comercio');
  });

  // Agregar evento de clic a la tarjeta de Catalogo
  tarjetaCatalogo.addEventListener('click', function () {
    showSection('catalogo');
  });

  // Agregar evento de clic a la tarjeta de Gestion Usuario
  tarjetaGestionUsuario.addEventListener('click', function () {
    showSection('gestion-del-usuario');
  });

  // Agregar evento de clic a la tarjeta de Cesta
  tarjetaCesta.addEventListener('click', function () {
    showSection('cesta');
  });

  // Agregar evento de clic a la tarjeta de Pedido
  tarjetaPedido.addEventListener('click', function () {
    showSection('pedido');
  });

  // Agregar evento de clic a la tarjeta de Flujo Mercancias
  tarjetaFlujoMercancias.addEventListener('click', function () {
    showSection('flujo-mercancias');
  });

  // Agregar evento de clic a la tarjeta de Cesta Impresion
  tarjetaCestaImpresion.addEventListener('click', function () {
    showSection('cesta-impresion');
  });

  // Agregar evento de clic a la tarjeta de Gestion Backoffice
  tarjetaGestionBackoffice.addEventListener('click', function () {
    showSection('gestion-backoffice');
  });

  // Agregar evento de clic al botón de seleccionar
  botonSeleccionar.addEventListener('click', function () {
    // Ocultar el elemento de selección de aprendizaje
    seleccionAprendizaje.style.display = 'none';

     // Agregar evento de clic a los botones de "+ Info" en la sección de Dashboard
     botonesInfo.forEach(boton => {
      boton.addEventListener('click', function () {
        // Encuentra el párrafo asociado al botón
        const parrafo = boton.previousElementSibling;
  
// Obtén todos los botones de información
const botonesInfo = document.querySelectorAll('.boton-info');

// Agregar evento de clic a los botones de "+ Info"
botonesInfo.forEach(boton => {
  boton.addEventListener('click', function () {
    // Encuentra el contenedor padre
    const contenedor = boton.closest('.carta');

    // Encuentra el párrafo y la imagen dentro del contenedor
    const parrafo = contenedor.querySelector('p');
    const imagen = contenedor.querySelector('.contenido-imagen');

    // Alternar la visibilidad del párrafo e imagen
    parrafo.style.display = (parrafo.style.display === 'none') ? 'block' : 'none';
    imagen.style.display = (imagen.style.display === 'none') ? 'block' : 'none';
  });
});
        
      });
      
      

    })
      // Verificar qué opción ha sido seleccionada y mostrar el contenido correspondiente
      if (opcion1.checked) {
        showSection('cube');
      } else if (opcion2.checked) {
        showSection('cestas');
      } else if (opcion3.checked) {
        showSection('basicos');
      }
    });
  
  
  });
