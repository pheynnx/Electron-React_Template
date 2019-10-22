const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');
const chalk = require('chalk')

const isWindows = (process.platform === 'win32');
const isMacintosh = (process.platform === 'darwin');
const isLinux = (process.platform === 'linux');

console.log(chalk.green('hello!!'));

let mainWindow;


const createWindow = () => {
    mainWindow = new BrowserWindow({
        backgroundColor: '#2A2A2A',
        width: 1280,
        height: 720,
        minWidth: 720,
        minHeight: 480,
        // breaks aero snap in windows; would be used for rounded corners...
        // transparent: isWindows,
        // frame: isMacintosh,
        webPreferences: { nodeIntegration: true }
    });

    mainWindow.setMenu(null)

    if (isDev) {
        mainWindow.loadURL('http://localhost:3000')
    } else {
        mainWindow.loadFile('build/index.html')
    }

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

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