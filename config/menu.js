
const { Menu, dialog, BrowserWindow, shell} = require('electron');
const path = require('path');
const url = require('url');
const template = [
    {
        label: '查看',
        submenu: [
            {
                label: '竖屏',
                type: 'radio', 
                checked: true,
                click: () => {
                    const win = BrowserWindow.fromId(1);
                    win.setSize(390,672);
                    win.webContents.send('change_event','vertical');
                }
            },
            {
                label: '横屏', 
                type: 'radio', 
                checked: false,
                click: () => {
                    const win = BrowserWindow.fromId(1);
                    win.setSize(670,460);
                    win.webContents.send('change_event','horizontal');
                }
            },
            {type: 'separator'},
            {label: '重载',role:'reload'},
            {label: '退出',role:'quit'},
        ]
    },
    {
        label: '帮助',
        submenu: [
            {
                label: '问题反馈',
                click: () => {
                    console.log('问题反馈')
                }
            },
            {
                label: '项目地址',
                click: () => {
                    shell.openExternal('https://github.com/amumu233/calculator');
                }
            },
            {type: 'separator'},
            {
                label: '关于作者',
                click: () => {
                    console.log('关于作者')
                }
            },
            {
                label: '关于计算器',
                click: () => {
                    const win = BrowserWindow.fromId(1);
                    let about = new BrowserWindow({
                        parent: win,
                        modal: true,
                        width: 500,
                        height: 300,
                        minimizable: false,
                        maximizable: false,
                        resizable: false,
                        title: '关于计算器'
                    })
                    
                    about.loadURL(url.format({
                        pathname: path.join(__dirname,'../src/about.html'),
                        protocol: 'file',
                        slashes: true
                    }));
                    // about.webContents.openDevTools();
                    about.setMenu(null);
                    about.once('ready-to-show', () => {
                        about.show();
                    })
                }
            }
        ]
    }
]
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);