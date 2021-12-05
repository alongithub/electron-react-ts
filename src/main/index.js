console.log('主进程入口')
const path = require('path');
const Store = require('electron-store');
Store.initRenderer()
const {
  app,
  BrowserWindow
} = require('electron')

let url;
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:9090/';
} else {
  url = 'file://' + path.join(__dirname, '/index.html');

}



app.on('ready', () => {
  console.log('%color:')
  createWindow(url);
});

function createWindow(url) {
  this.mainWindow = new BrowserWindow({
    width: 1020,
    height: 650,
    // resizable: false,
    // minimizable: false,
    // maximizable: false,
    // fullscreen: false,
    // fullscreenable: false,
    closable: true,
    center: true,
    show: true,
    // frame: false,
    // autoHideMenuBar: true,
    // alwaysOnTop: false,
    // titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // preload: path.join(__dirname, `../inject/preload.js`)
    }
  });
  this.mainWindow.loadURL(url);
}