const electron = require('electron');
const sass = require('electron').remote.require('./js/sassHelper');
const json = require('electron').remote.require('./js/jsonHelper');

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }

  replaceText('app-version', electron.remote.app.getVersion());

  const refresh = document.getElementById('refreshStyles');
  refresh.addEventListener('click', function() {
    console.log(editorInstance.getValue());

    var style = document.getElementById('themeStyles');

    if (!style) {
      var head = document.head;
      style = document.createElement('style');

      head.appendChild(style);
      style.id = 'themeStyles';
      style.type = 'text/css';
    }
    style.innerHTML = '';

    var css = sass.compileContent(editorInstance.getValue());
    style.appendChild(document.createTextNode(css));
  });

  var scss = sass.loadSCSS('./app/scss/template.scss');
  editorInstance.setValue(scss, 1);
  editorInstance.clearSelection();
});

sass.compileFile('app/scss/template.scss', 'app/css/theme.css');
