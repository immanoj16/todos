const { app, BrowserWindow, Menu } = require('electron')
const url = require('url')
const path = require('path')

let mainWindow
let addWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  const mainMenu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(mainMenu)
})

function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Add New Todo'
  })

  addWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'newtodo.html'),
    protocol: 'file:',
    slashes: true
  }))
}

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New Todo',
        click: function () {
          createAddWindow()
        }
      },
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click: function() {
          app.quit()
        }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  menuTemplate.unshift({})
}
