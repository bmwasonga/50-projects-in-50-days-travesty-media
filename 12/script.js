const tgl = document.querySelectorAll('.faq-toggle');

tgl.forEach((e) => {
  e.addEventListener('click', () => {
    e.parentNode.classList.toggle('active');
  });
});
