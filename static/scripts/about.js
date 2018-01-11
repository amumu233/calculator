const { shell, remote }  = require('electron');

const main = {
    init(){
        main.getAppVersion();
        main.eventHandle();
    },
    eventHandle(){
        document.querySelector('.code').onclick = (e) => {
            shell.openExternal('https://github.com/amumu233/calculator')
        }
    },
    getAppVersion(){
        document.querySelector('.version').innerHTML =  remote.getGlobal('version');
    }
}

main.init();