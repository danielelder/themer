const fs = require("fs");

module.exports = {
  saveJSON: function (json, filename) {
    fs.writeFile(filename, json, (err) => {
      if (err) {
        console.log(err);
        return false;
      }
    });

    return true;
  },
  loadJSON: function (filename) {
    let json = null;
    fs.readFile(filename, 'utf8', (err, jsonString) => {
      if (err) {
        console.log(err);
      }
      else {
        try {
          json = JSON.parse(jsonString);
        } catch(err) {
          console.log(err);
        }
      }
      return json;
    });
  }
}
