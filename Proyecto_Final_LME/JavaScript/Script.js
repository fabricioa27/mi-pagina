// Función que actualiza el reloj con formato 12 horas y AM/PM
function actualizarReloj() {
    const ahora = new Date(); // Obtiene la fecha y hora actual

    let horas = ahora.getHours(); // Obtiene la hora en formato 24 horas (0-23)
    const minutos = ahora.getMinutes().toString().padStart(2, '0'); // Obtiene los minutos y formatea con 2 dígitos
    const segundos = ahora.getSeconds().toString().padStart(2, '0'); // Obtiene los segundos y formatea con 2 dígitos

    // Determina si es AM o PM según la hora
    const ampm = horas >= 12 ? 'PM' : 'AM';

    // Convierte la hora a formato 12 horas
    horas = horas % 12;
    horas = horas ? horas : 12; // Si horas es 0 (medianoche o mediodía), se muestra como 12

    // Construye la cadena final de la hora en formato hh:mm:ss AM/PM
    const horaFinal = `${horas.toString().padStart(2, '0')}:${minutos}:${segundos} ${ampm}`;

    // Actualiza el contenido del elemento con id "reloj" con la hora formateada
    document.getElementById("reloj").textContent = horaFinal;
}

// Llama a actualizarReloj cada 1000 ms para actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llama a la función inmediatamente para mostrar la hora al cargar la página
actualizarReloj();

