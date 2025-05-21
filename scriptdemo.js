document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('previewForm');
  const logoInput = document.getElementById('logoInput');
  const fileName = document.getElementById('fileName');
  const primaryColor = document.getElementById('primaryColor');
  const secondaryColor = document.getElementById('secondaryColor');
  const templateSelect = document.getElementById('templateSelect');
  const downloadBtn = document.getElementById('downloadBtn');
  const shareBtn = document.getElementById('shareBtn');
  
  // Elementos de vista previa
  const logoPreview = document.getElementById('logoPreview');
  const namePreview = document.getElementById('namePreview');
  const namePreviewNav = document.getElementById('namePreviewNav');
  const sloganPreview = document.getElementById('sloganPreview');
  const previewNav = document.getElementById('previewNav');
  const previewHeader = document.querySelector('.preview-header');
  const websitePreview = document.getElementById('websitePreview');
  
  // Manejar cambio de logo
  logoInput.addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      fileName.textContent = file.name;
      
      const reader = new FileReader();
      reader.onload = function(event) {
        logoPreview.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Manejar envío del formulario
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Actualizar contenido
    const businessName = document.getElementById('businessName').value;
    const businessSlogan = document.getElementById('businessSlogan').value;
    
    namePreview.textContent = businessName;
    namePreviewNav.textContent = businessName;
    sloganPreview.textContent = businessSlogan || 'Tu eslogan profesional aquí';
    
    // Aplicar colores
    applyColors();
    
    // Habilitar botones de acción
    downloadBtn.disabled = false;
    shareBtn.disabled = false;
    
    // Mostrar vista previa con animación
    websitePreview.style.opacity = '0';
    setTimeout(() => {
      websitePreview.style.opacity = '1';
    }, 300);
  });
  
  // Manejar cambio de colores
  primaryColor.addEventListener('input', applyColors);
  secondaryColor.addEventListener('input', applyColors);
  
  // Función para aplicar colores seleccionados
  function applyColors() {
    const primColor = primaryColor.value;
    const secColor = secondaryColor.value;
    
    // Actualizar variables CSS
    document.documentElement.style.setProperty('--primary-color', primColor);
    document.documentElement.style.setProperty('--secondary-color', secColor);
    
    // Aplicar gradiente al header
    previewHeader.style.background = `linear-gradient(135deg, ${primColor} 0%, ${secColor} 100%)`;
    
    // Aplicar color al navbar
    previewNav.style.backgroundColor = primColor;
  }
  
  // Manejar cambio de plantilla
  templateSelect.addEventListener('change', function() {
    websitePreview.className = 'website-preview';
    websitePreview.classList.add(this.value);
    
    // Aquí podrías añadir más lógica para cambiar estilos según la plantilla
  });
  
  // Botón de descarga (simulado)
  downloadBtn.addEventListener('click', function() {
    if (!this.disabled) {
      alert('Esta funcionalidad descargaría el código HTML/CSS de la página generada');
      // En una implementación real, aquí generarías y descargarías un archivo ZIP
    }
  });
  
  // Botón de compartir (simulado)
  shareBtn.addEventListener('click', function() {
    if (!this.disabled) {
      alert('Esta funcionalidad permitiría compartir la vista previa generada');
      // En una implementación real, podrías implementar share API o generar un enlace
    }
  });
});