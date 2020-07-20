(function() {
  document.addEventListener('mousedown', () => {
    document.body.classList.add('no-focus');
  });
  document.addEventListener('keydown', () => {
    document.body.classList.remove('no-focus');
  });
})();
