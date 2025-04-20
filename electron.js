
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false // Required for loading local files
    }
  });

  // Load the index.html from a url in dev mode or the local file in production
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:8080'
      : `file://${path.join(__dirname, './dist/index.html')}`
  );

  // Remove the default menu
  mainWindow.setMenu(null);

  // Open the DevTools in development mode.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
