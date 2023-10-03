let descripcionActual = null;

function mostrarDescripcion(descripcionId) {
    if (descripcionActual) {
        ocultarDescripcion(descripcionActual);
    }

    var descripcion = document.getElementById(descripcionId);
    descripcion.style.display = 'block';

    // Reducir la opacidad del banner
    var banner = document.getElementById('banner');
    banner.style.opacity = '0.7';

    descripcionActual = descripcionId;
}

function ocultarDescripcion(descripcionId) {
    var descripcion = document.getElementById(descripcionId);
    descripcion.style.display = 'none';

    // Restaurar la opacidad del banner solo si no hay otra descripción mostrándose
    if (!descripcionActual) {
        var banner = document.getElementById('banner');
        banner.style.opacity = '1';
    }
}

function enviarFormulario() {
    document.getElementById('confirmation-message').innerHTML = '¡Formulario enviado con éxito!';
    return false; 
}

function irAFormulario(pagina) {
    window.location.href = pagina;
}

function mostrarFormulario(pagina, tarjetaId) {
    // Desvanecer las tarjetas no seleccionadas
    var tarjetas = document.querySelectorAll('.plan-card');
    for (var i = 0; i < tarjetas.length; i++) {
        if (tarjetas[i].id !== tarjetaId) {
            tarjetas[i].style.opacity = '0.7';
        }
    }

    // Redirigir a la página del formulario
    window.location.href = pagina;
}

function mostrarDescripcion(descripcionId) {
    var descripcion = document.getElementById(descripcionId);
    descripcion.style.display = 'block';

    // Reducir la opacidad del banner
    var banner = document.getElementById('banner');
    banner.style.opacity = '0';
}

function ocultarDescripcion(descripcionId) {
    var descripcion = document.getElementById(descripcionId);
    descripcion.style.display = 'none';

    // Restaurar la opacidad del banner
    var banner = document.getElementById('banner');
    banner.style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', function () {
    var llamamosMessage = document.getElementById('llamamos-message');

    setTimeout(function () {
        llamamosMessage.style.display = 'block'; // Mostramos el mensaje
        setTimeout(function () {
            llamamosMessage.style.display = 'none'; // Ocultamos el mensaje después de unos segundos
        }, 3000); // 3000 milisegundos = 3 segundos
    }, 1000); // Mostrar el mensaje después de 1 segundo
});