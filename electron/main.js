// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

const octicons = require("@primer/octicons")

function createWindow () {
  // Create the browser window.
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
	  resizable: true, frame: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  window.setMenu(null);
  
  // and load the index.html of the app.
  window.loadFile('index.html')  

  // Open the DevTools.
  window.webContents.openDevTools()
}

/*ipc.on("close-app", (event, message) => { //"close-app" can be anything but, you need to use the same key in the send message side (later in this answer)
  browserWindow.close(); //If you named the browserwindow as browserWindow
});
*/

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
