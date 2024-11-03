self.addEventListener('install', (event) => {
    console.log('Service Worker instalado');
    // Puedes agregar aquí archivos para cachear si lo deseas
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('Interceptando petición: ', event.request.url);
    // Puedes manejar las peticiones y respuestas cacheadas aquí
  });
  