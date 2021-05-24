const { app, BrowserWindow, Menu } = require('electron')
const url = require('url')
const path = require('path')
const Store = require('electron-store')

const store = new Store();
// const nativeImage = requre('electron').nativeImage;
//     var image = nativeImage.createFromPath(__dirname + '/assetts/Images/icon.png');
//     image.setTemplateImage(true);

let win

function createWindow() {
    win = new BrowserWindow({ 
        width: 1400, 
        height: 1000,
        icon: path.join(__dirname, 'assetts/icons/png/desktop_quick.png'),
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        } 
    
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    //opens dev tools
    //win.webContents.openDevTools();

    //Quit aap when closed
    win.on('closed', () => {
        win = null
    })

    var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                { 
                    label: 'Refresh',
                    click() {
                    //refresh function
                } },
                {type: 'separator'},
                {
                    label: 'Exit',
                    click() {
                        app.quit()
                    }
                }
            ]
        }
    ])

    Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

