const { app, BrowserWindow, Tray } = require("electron")
const path = require("path")

let window = null
let tray = null

app.dock.hide()

app.once('ready', () => {
  tray = new Tray(path.join('assets', 'electron-icon.png'))
  tray.on('right-click', toggleWindow)
  tray.on('double-click', toggleWindow)
  tray.on('click', function (event) {
    toggleWindow()
  })
  
  window = new BrowserWindow({
    width: 300,
    height: 450,
    show: false,
    frame: false,
    fullscreenable: false,
    webPreferences: {
      backgroundThrottling: false
    }
  })

  const url = "https://henryneeds.coffee"
  // window.loadURL(url)
  window.loadURL(`file://${path.join(__dirname, './index.html')}`)

  window.once('ready-to-show', () => {
    const position = getWindowPosition()
    window.setPosition(position.x, position.y, false)
    window.show()
    window.focus()
  })

  window.on('blur', () => {
    window.hide()
  })
})

const getWindowPosition = () => {
  const windowBounds = window.getBounds()
  const trayBounds = tray.getBounds()

  const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))

  const y = Math.round(trayBounds.y + trayBounds.height + 4)

  return { x: x, y: y }
}

const toggleWindow = () => {
  if (window.isVisible()) {
    window.hide()
  } else {
    showWindow()
  }
}

const showWindow = () => {
  const position = getWindowPosition()
  window.setPosition(position.x, position.y, false)
  window.show()
  window.focus()
}