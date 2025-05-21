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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación del formulario
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }
        
        // Configuración del botón de enviar
        const submitBtn = form.querySelector('button[type="submit"]');
        const submitText = submitBtn.querySelector('.submit-text');
        const spinner = submitBtn.querySelector('.spinner-border');
        
        // Mostrar estado de carga
        submitText.textContent = 'Enviando...';
        spinner.classList.remove('d-none');
        submitBtn.disabled = true;
        
        // Obtener datos del formulario
        const formData = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            telephone: document.getElementById('telephone').value || 'No proporcionado',
            service: document.getElementById('service').value || 'No especificado',
            message: document.getElementById('message').value
        };

        // Primero: Guardar en Firebase (opcional pero recomendado)
        db.ref('mensajes').push({
            nombre: formData.from_name,
            correo: formData.from_email,
            telefono: formData.telephone,
            servicio: formData.service,
            mensaje: formData.message,
            fecha: new Date().toISOString()
        })
        .then(() => {
            // Segundo: Enviar email con EmailJS
            return emailjs.send(
                'default_service', // Reemplaza con tu Service ID si usas uno diferente
                'template_default', // Reemplaza con tu Template ID
                formData
            );
        })
        .then(() => {
            // Mostrar mensaje de éxito
            const alert = document.getElementById('formAlert');
            alert.classList.remove('d-none');
            alert.classList.add('alert-success');
            alert.innerHTML = '<i class="fas fa-check-circle me-2"></i>¡Mensaje enviado correctamente!';
            
            // Resetear formulario después de 3 segundos
            setTimeout(() => {
                form.reset();
                form.classList.remove('was-validated');
                alert.classList.add('d-none');
            }, 3000);
        })
        .catch((error) => {
            console.error('Error:', error);
            
            // Mostrar mensaje de error
            const alert = document.getElementById('formAlert');
            alert.classList.remove('d-none');
            alert.classList.add('alert-danger');
            alert.innerHTML = `<i class="fas fa-exclamation-circle me-2"></i>Error al enviar: ${error.message || 'Por favor intenta nuevamente'}`;
        })
        .finally(() => {
            // Restaurar botón
            submitText.textContent = 'Enviar mensaje';
            spinner.classList.add('d-none');
            submitBtn.disabled = false;
        });
    });
});