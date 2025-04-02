import { BrowserWindow, app } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    title: 'Electron',
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile('index.html');
};

app.whenReady().then(createWindow);
