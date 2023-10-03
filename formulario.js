document.addEventListener('DOMContentLoaded', function () {
    var llamamosMessage = document.getElementById('llamamos-message');

    setTimeout(function () {
        llamamosMessage.style.display = 'block'; // Mostramos el mensaje
        setTimeout(function () {
            llamamosMessage.style.display = 'none'; // Ocultamos el mensaje después de unos segundos
        }, 8000); // 3000 milisegundos = 3 segundos
    }, 1000); // Mostrar el mensaje después de 1 segundo
});

// Función para mostrar el mensaje y repetir después de un tiempo
function mostrarMensajeLlamada() {
    var llamamosMessage = document.getElementById('llamamos-message');
    llamamosMessage.style.display = 'block'; // Mostramos el mensaje

    setTimeout(function () {
        llamamosMessage.style.display = 'none'; // Ocultamos el mensaje después de unos segundos
        setTimeout(mostrarMensajeLlamada, 1000); // Mostrar el mensaje nuevamente después de 5 segundos
    }, 3000); // 3000 milisegundos = 3 segundos
}

document.addEventListener('DOMContentLoaded', function () {
    mostrarMensajeLlamada(); // Llamamos a la función al cargar la página
});
