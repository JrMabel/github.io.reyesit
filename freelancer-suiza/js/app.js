// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    databaseURL: "https://TU_PROYECTO.firebaseio.com",
    projectId: "TU_PROYECTO",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Función para enviar el formulario de contacto
function enviarFormulario(event) {
    event.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validar campos
    if (!nombre || !email || !servicio || !mensaje) {
        mostrarAlerta('Por favor complete todos los campos obligatorios', 'danger');
        return;
    }
    
    // Crear objeto con los datos
    const solicitud = {
        nombre: nombre,
        email: email,
        telefono: telefono || 'No proporcionado',
        servicio: servicio,
        mensaje: mensaje,
        fecha: new Date().toISOString(),
        estado: 'nuevo'
    };
    
    // Enviar a Firebase
    const nuevoSolicitudRef = database.ref('solicitudes').push();
    nuevoSolicitudRef.set(solicitud)
        .then(() => {
            mostrarAlerta('¡Solicitud enviada con éxito! Me pondré en contacto contigo pronto.', 'success');
            document.getElementById('contactForm').reset();
        })
        .catch((error) => {
            console.error("Error al enviar la solicitud: ", error);
            mostrarAlerta('Hubo un error al enviar tu solicitud. Por favor inténtalo de nuevo.', 'danger');
        });
}

// Función para mostrar alertas
function mostrarAlerta(mensaje, tipo) {
    const alertaDiv = document.createElement('div');
    alertaDiv.className = `alert alert-${tipo} alert-dismissible fade show`;
    alertaDiv.role = 'alert';
    alertaDiv.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    const contenedor = document.getElementById('alerta-container');
    contenedor.innerHTML = '';
    contenedor.appendChild(alertaDiv);
    
    // Ocultar después de 5 segundos
    setTimeout(() => {
        const alerta = bootstrap.Alert.getOrCreateInstance(alertaDiv);
        alerta.close();
    }, 5000);
}

// Asignar evento al formulario si existe en la página
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('contactForm');
    if (formulario) {
        formulario.addEventListener('submit', enviarFormulario);
    }
    
    // Animación de scroll suave para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});