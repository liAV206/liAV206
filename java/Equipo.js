document.addEventListener('DOMContentLoaded', function() {
    const miembros = document.querySelectorAll('.miembro-equipo');
  
    miembros.forEach(function(miembro) {
      const nombre = miembro.querySelector('.nombre span');
      const containerWidth = miembro.querySelector('.nombre').offsetWidth;
      const textWidth = nombre.scrollWidth;
      const animDuration = textWidth / 20;
  
      nombre.style.animationDuration = `${animDuration}`;
    });
  });