const { app, BrowserWindow, Menu } = require('electron')
const url = require('url')
const path = require('path')


let win

function createWindow() {
    win = new BrowserWindow({ width: 1200, height: 800 })

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
