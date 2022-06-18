# electron


## Lesson 1: Install electron
```javascript
npm init 
npm install electron --save-dev 
npm install nodemon

const {app, BrowserWindow, Menu, globalShortcut, ipcMain, remote, dialog}            
                                                              = require('electron')
```
```javascript
Pakage.json (add this)

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron .",
     "dev": "nodemon --exec electron ."
  }
```

## Lesson 2: Main.js
```javascript
main.js (add this)
Create MainWindow
let mainWindow
function createMainWindow(){
    mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width:1000,
        height:800,
        resizable: !isDev,
        icon:'',
        titleBarStyle:'customButtonsOnHover',
        backgroundColor:'white',
        
        webPreferences:{nodeIntegration:true,
            contextIsolation: false,
            enableRemoteModule: true,}
            
    })
 mainWindow.loadFile('./app/bill.html')
}
app.on('ready',()=>{
    createMainWindow()
    mainWindow.on('ready',()=>mainWindow=null)
})
app.on('window-all-closed',()=>{
  if(process.platform ==='win32'){
        app.quit()}
})
app.on('activate',()=>{
    if(BrowserWindow.getAllWindows().length===0){
        createMainWindow()
    }
})
```

## Lesson 3. Create menu and submenu and global shortcut
```javascript
const menu=[
    {label: 'File',submenu:[{label:'Quit',
    submenu:[{label:'exit', accelerator:isMac?'Command+Q':'Ctrl+Q',click:()=>app.quit()}]   }]}
]
app.on('ready',()=>{
    createMainWindow()
    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)
 globalShortcut.register('CmdOrCtrl+R',()=>{mainWindow.reload();console.log('reload...')})
 globalShortcut.register('CmdOrCtrl+A',()=>{mainWindow.toggleDevTools();console.log('devTool...')})
    mainWindow.on('ready',()=>mainWindow=null)
})
```
## Advanced
Select or Open images from menu 
```javascript
const menu = [
{label:'Image',submenu:[{label:'open',accelerator:'CmdOrCtrl+O'
,click:()=>{
var img =''
dialog.showOpenDialog({defaultPath:app.getPath(“pictures”),
buttonLabel:'select image'}).then(result)=>{
img=result.filePaths
mainWindow.webContents.send('image',img)
}
} }]} ]
render.js
const { ipcRenderer } = require('electron')
ipcRender.on('image',(event,arg)=>{
arg//
})
```

## CSS – AdOn
To create a new element like button or input when we press a button
```javascript
<button onClick = “clickMe()”>Click</button>
<input id=”in”>
<div id=”add”></div>

var input1 = document.getElementById('in')
var div1 = document.getElementById('add')
function clickMe(){
var para = document.createElement('p')
var but = document.createElement('button')
but.innerText = 'remove'
but.classList.add('here .class name')
para.innerText=input1.value
div1.appendChild(para)
div1.appendChild(but)

but.addEventListener('dblclick', function(){
div1.removeChild(but)
div1.removeChild(para)
})
}
```
```
<---Todo's--->
screen.width vs window.innerWidth
```
