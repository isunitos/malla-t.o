document.querySelectorAll('.course').forEach(course => {
  course.addEventListener('click', () => {
    alert(`Curso: ${course.textContent}\nCréditos: ${course.title}`);
  });
});

