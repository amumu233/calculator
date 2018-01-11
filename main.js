const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');

require('./config/menu.js');

let win;

global['version'] = app.getVersion();


app.on('ready',()=>{
    win = new BrowserWindow({
        width: 390,
        height: 672,
        fullscreen: false,
        resizable: false
    });
    // win.webContents.openDevTools();
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes: true
    }));
    win.on('closed',()=>{
        win = null;
    })
});


app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})