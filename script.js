// Mostrar alerta con el nombre y créditos del ramo al hacer clic
document.querySelectorAll('.course').forEach(course => {
  course.addEventListener('click', () => {
    const nombre = course.textContent;
    const creditos = course.title || 'Sin créditos definidos';
    alert(`📚 Curso: ${nombre}\n🎓 Créditos: ${creditos}`);
  });
});
