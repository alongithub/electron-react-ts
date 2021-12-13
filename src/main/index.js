console.log('主进程入口')
const path = require('path');
const Store = require('electron-store');
Store.initRenderer()
const {
  app,
  BrowserWindow
} = require('electron')

const _isDevelopment = process.env.NODE_ENV === 'development';
const _isProduction = process.env.NODE_ENV === 'production';

let url;
if (_isDevelopment) {
  url = 'http://localhost:9090/';
} else {
  url = 'file://' + path.join(__dirname, '/index.html');

}

let mainWindow;

// development 情况下不做单例限制，主要是考虑开发时可能同时运行两个electron的dev环境
if (checkInstance() || _isDevelopment) {
  initApp()
} else {
  console.log('实例已存在')
  app.quit();
}

function initApp() {
  app.on('ready', () => {
    console.log('%color:')
    createWindow(url);
  });

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) {
        mainWindow.restore();
      }
    }
  })
}

function createWindow(url) {
  mainWindow = new BrowserWindow({
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
    autoHideMenuBar: true,
    // alwaysOnTop: false,
    // titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // preload: path.join(__dirname, `../inject/preload.js`)
    }
  });
  mainWindow.loadURL(url);
}

function checkInstance() {
  const gotTheLock = app.requestSingleInstanceLock();
  return gotTheLock;
}