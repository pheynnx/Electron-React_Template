## Electron and Create-React-App Starter Template

This is a starter template using the latest create-react-app and electron packages

## How to use:

1. Clone or download the repo
2. From the root of the directory run 'npm install' in your terminal
3. For development, run `npm run electron-dev`
4. For building, run `npm run electron-pack` (don't forget to change the script flag to your OS)

## Built in scripts:

`electron-dev`, used for real-time development: runs electron with nodemon and reacts development script

`postinstall`, will auto run after any package install: converts package to support electrons nodejs version

`preelectron-pack`, will auto run before electron build: builds react package

`electron-pack`, builds electron: use -w for windows, -m for mac, -l for linux; read offical electron-builder docs for more options

**Dependencies:**

- "electron-is-dev": "^1.2.0",
- "react": "^16.13.1",
- "react-dom": "^16.13.1",
- "react-scripts": "3.4.1",
- "upgrade": "^1.1.0"

Last updated: July 2, 2020
