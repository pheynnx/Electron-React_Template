## Electron and Create-React-App Starter Template

This is a starter template using the latest create-react-app and electron packages

Please use Yarn; scripts can be modified to use npm though

## How to use:
1. Clone or download the repo
2. From the root of the directory run 'yarn install' in your terminal
3. For development, run 'yarn electron-dev'
4. For building, run 'yarn electron-pack' (don't forget to change the script flag to your OS)

## Built in scripts:

**"electron-dev"**, used for real-time development: runs electron with nodemon and reacts development script

**"postinstall"**, will auto run after any package install: converts package to support electrons nodejs version

**"preelectron-pack"**,  will auto run before electron build: builds react package

**"electron-pack"**, builds electron: use -w for windows, -m for mac, -l for linux; read offical electron-builder docs for more options

**Dependencies:**
- "electron-is-dev": "^1.1.0",
- "react": "^16.11.0",
- "react-dom": "^16.11.0",
- "react-scripts": "3.2.0"

**DevDependencies:**
- "concurrently": "^5.0.0",
- "cross-env": "^6.0.3",
- "electron": "^7.0.0",
- "electron-builder": "^21.2.0",
- "nodemon": "^1.19.4",
- "wait-on": "^3.3.0"

Last updated: October 23, 2019
