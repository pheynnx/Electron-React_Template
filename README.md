## Electron and Create-React-App Starter Template

This is a starter template using the latest create-react-app and electron packages

Please use Yarn; scripts can be modified to use npm though

#### Built in scripts:

Used for real-time development: runs electron with nodemon and reacts development script
- "electron-dev": "concurrently \"cross-env BROWSER=none yarn start\" \"wait-on http://localhost:3000 && nodemon --exec electron .\""

Will auto run after any package install: converts package to support electrons nodejs version
- "postinstall": "electron-builder install-app-deps"

Will auto run before electron build: builds react package
- "preelectron-pack": "yarn build"

Builds electron: use -w for windows, -m for mac, -l for linux; read offical electron-builder docs for more options
- "electron-pack": "electron-builder -w "

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
