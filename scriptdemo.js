document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('demo-previewForm');
  const logoInput = document.getElementById('demo-logoInput');
  const fileName = document.getElementById('demo-fileName');
  const primaryColor = document.getElementById('demo-primaryColor');
  const secondaryColor = document.getElementById('demo-secondaryColor');
  const templateSelect = document.getElementById('demo-templateSelect');
  const downloadBtn = document.getElementById('demo-downloadBtn');
  const shareBtn = document.getElementById('demo-shareBtn');
  
  // Elementos de vista previa
  const logoPreview = document.getElementById('demo-logoPreview');
  const namePreview = document.getElementById('demo-namePreview');
  const namePreviewNav = document.getElementById('demo-namePreviewNav');
  const sloganPreview = document.getElementById('demo-sloganPreview');
  const previewNav = document.getElementById('demo-previewNav');
  const previewHeader = document.querySelector('.demo-preview-header');
  const websitePreview = document.getElementById('demo-websitePreview');
  
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
    
    const businessName = document.getElementById('demo-businessName').value;
    const businessSlogan = document.getElementById('demo-businessSlogan').value;
    
    namePreview.textContent = businessName;
    namePreviewNav.textContent = businessName;
    sloganPreview.textContent = businessSlogan || 'Tu eslogan profesional aquí';
    
    applyColors();
    
    downloadBtn.disabled = false;
    shareBtn.disabled = false;
    
    websitePreview.style.opacity = '0';
    setTimeout(() => {
      websitePreview.style.opacity = '1';
    }, 300);
  });
  
  // Manejar cambio de colores
  primaryColor.addEventListener('input', applyColors);
  secondaryColor.addEventListener('input', applyColors);
  
  function applyColors() {
    const primColor = primaryColor.value;
    const secColor = secondaryColor.value;
    
    document.documentElement.style.setProperty('--demo-primary-color', primColor);
    document.documentElement.style.setProperty('--demo-secondary-color', secColor);
    
    previewHeader.style.background = `linear-gradient(135deg, ${primColor} 0%, ${secColor} 100%)`;
    previewNav.style.backgroundColor = primColor;
  }
  
  // Manejar cambio de plantilla
  templateSelect.addEventListener('change', function() {
    websitePreview.className = 'demo-website-preview';
    websitePreview.classList.add('demo-' + this.value);
  });
  
  // Botón de descarga
  downloadBtn.addEventListener('click', function() {
    if (!this.disabled) {
      alert('Esta funcionalidad descargaría el código HTML/CSS de la página generada');
    }
  });
  
  // Botón de compartir
  shareBtn.addEventListener('click', function() {
    if (!this.disabled) {
      alert('Esta funcionalidad permitiría compartir la vista previa generada');
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const templateSelect = document.getElementById('demo-templateSelect');
  const websitePreview = document.getElementById('demo-websitePreview');

  // Cambiar diseño al seleccionar una opción
  templateSelect.addEventListener('change', function() {
    applyTemplateStyle(this.value);
  });

  function applyTemplateStyle(template) {
    // Resetear todas las clases de estilo
    websitePreview.className = 'demo-website-preview';
    
    // Aplicar clase según la selección
    switch(template) {
      case 'modern':
        websitePreview.classList.add('modern-style');
        break;
      case 'elegant':
        websitePreview.classList.add('elegant-style');
        break;
      case 'minimal':
        websitePreview.classList.add('minimal-style');
        break;
    }
  }

  // Inicializar con el estilo por defecto (Moderno)
  applyTemplateStyle(templateSelect.value);
});
