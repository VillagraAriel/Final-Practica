function enviarCotizacion() {
    // Validar campos requeridos
    var tipoCable = document.getElementById('tipo_cable').value;
    var longitud = document.getElementById('longitud').value;
    var tipoConexion = document.getElementById('tipo_conexion').value;

    if (tipoCable === '' || longitud === '' || tipoConexion === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return; // Evita enviar el formulario si falta algún campo requerido.
    }

    // Realiza acciones adicionales antes de enviar el formulario, si es necesario.

    // Muestra un mensaje de éxito (puedes personalizar este mensaje).
    alert('Cotización enviada con éxito. ¡Gracias!');

    // Limpiar los campos del formulario
    document.getElementById('cotizacionForm').reset();
    // Restablecer el tipo de conexión seleccionado a "Selecciona una opción"
    document.getElementById("tipo_conexion_select").getElementsByClassName("selected-item")[0].innerHTML = "Selecciona una opción";
    document.getElementById("tipo_conexion").value = "";

    // Redirigir a la página 'cotizacion.html' después de un breve retraso (puedes ajustar el tiempo)
    setTimeout(function () {
        console.log('Redirigiendo a cotizacion.html');
        window.location.replace('cotizacion.html');
    }, 1000); // Espera 1 segundo (puedes ajustar este valor según tus necesidades)
}

function toggleOptions() {
    var options = document.getElementById("tipo_conexion_options");

    // Verificar si el menú de opciones está oculto
    if (options.style.display === "" || options.style.display === "none") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }
}

function selectOption(option) {
    var selectedValue = option.getAttribute("data-value");
    var selectedItem = document.getElementById("tipo_conexion_select").getElementsByClassName("selected-item")[0];
    var hiddenInput = document.getElementById("tipo_conexion");

    selectedItem.innerHTML = option.innerHTML;
    hiddenInput.value = selectedValue;
    toggleOptions();
}