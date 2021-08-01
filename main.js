const {app, BrowserWindow, Menu, globalShortcut} = require('electron')
let mainWindow
function createMainWindow (){
     mainWindow = new BrowserWindow({
        title:'Todo Manager',
        icon:`${__dirname}/Allaudin.png`,
        resizable:true,
        backgroundColor:'gray',
        webPreferences:{
            nodeIntegration:true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    })
mainWindow.loadURL(`file://${__dirname}/app/index.html`)
//mainWindow.loadURL('https://jeevanpradeepr.github.io/todo/')
} 

app.on('ready',()=>{
    createMainWindow()
       globalShortcut.register('Alt+W', () => app.quit());
    mainWindow.on('closed',()=>mainWindow=null)
})



