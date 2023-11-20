document.addEventListener('DOMContentLoaded', function () {
    // Agregamos un evento 'submit' al formulario
    document.querySelector('form').addEventListener('submit', function (event) {
        // Evitamos que el formulario se envíe normalmente
        event.preventDefault();

        // Aquí puedes agregar lógica para procesar el formulario (enviarlo al servidor, etc.)

        // Mostramos un mensaje
        mostrarMensaje('Formulario enviado con éxito. ¡Gracias!');
    });
});

function mostrarMensaje(mensaje) {
    // Creamos un elemento para mostrar el mensaje
    var mensajeElemento = document.createElement('div');
    mensajeElemento.textContent = mensaje;
    mensajeElemento.className = 'mensaje';

    // Agregamos el elemento al cuerpo del documento
    document.body.appendChild(mensajeElemento);

    // Recargamos la página después de un breve período
    setTimeout(function () {
        location.reload();
    }, 3000); // Recargamos la página después de 3 segundos (ajusta este valor según tus necesidades)
}
function cambiarModo() {
    const body = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const section = document.querySelector('section');
    const footer = document.querySelector('footer');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    section.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}
