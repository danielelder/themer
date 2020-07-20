const sass = require('sass');
const fs = require("fs");

module.exports = {
  saveCSS: function (css, filename) {
    fs.writeFile(filename, css, (err) => {
      if (err) {
        console.log(err);
        return false;
      }
    });

    return true;
  },
  loadSCSS: function (filename) {
    const scss = fs.readFileSync(filename, 'utf8');
    return scss;
  },
  compileFile: function (input, output) {
    const result = sass.renderSync({
      file: input
    })

    return this.saveCSS(result.css.toString(), output);
  },
  compileContent: function (input) {
    const result = sass.renderSync({
      data: input
    })

    return result.css.toString();
  }
}
