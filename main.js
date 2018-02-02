const { app, BrowserWindow, Menu } = require('electron')
const url = require('url')
const path = require('path')

let mainWindow

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

const menuTemplate = [
  {
    label: 'File'
  }
]
