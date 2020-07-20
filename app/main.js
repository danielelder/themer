// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const Store = require('electron-store');
const path = require('path');
const fs = require("fs");
const sass = require('sass');

const store = new Store();

function createWindow () {

  let opts = {
    backgroundColor: '#1e1e1e',
    webPreferences: {
      preload: path.join(__dirname, 'js/preload.js')
    }
  }

  Object.assign(opts, store.get('winBounds'));
  const mainWindow = new BrowserWindow(opts);

  mainWindow.loadFile('app/index.html');

  // save window size and position
  mainWindow.on('close', () => {
    store.set('winBounds', mainWindow.getBounds());
  });

}

// Initialised, create the browser window.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS stay active until the user quits explicitly
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On macOS re-create window when dock icon is clicked (if not already open)
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
