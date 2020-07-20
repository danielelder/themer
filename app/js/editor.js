var editorMode = ace.require('ace/mode/css').Mode;
var editorInstance = ace.edit('editor');

editorInstance.$blockScrolling = Infinity;
editorInstance.setTheme('ace/theme/twilight');
editorInstance.setFontSize('16px');
editorInstance.session.setUseWorker(false);
editorInstance.session.setMode(new editorMode());
