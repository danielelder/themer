(function() {
  const tabs = document.querySelectorAll('.tab');
  const content = document.querySelectorAll('.content');

  function hideAllContent() {
    [].forEach.call(content, function(view) {
      view.classList.add('hidden');
    });

    [].forEach.call(tabs, function(tab) {
      tab.classList.remove('tab--active');
    });
  }

  function showContent(tab, content) {
    tab.classList.add('tab--active');
    content.classList.remove('hidden');
    content.setAttribute('tabindex', '0');
    content.focus();
    content.removeAttribute('tabindex');
  }

  [].forEach.call(tabs, function(tab) {
    tab.addEventListener('click', function(evt) {
      const contentId = tab.dataset.section;
      const contentSection = document.querySelector('#' + contentId);
      if (!contentSection) {
        return;
      }
      hideAllContent();
      showContent(tab, contentSection);
    });
  });
})();
