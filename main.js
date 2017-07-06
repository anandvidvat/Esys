const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;


function CreateWindow() {
    //create Browser window
    win = new BrowserWindow({
        width: 800, heigth:600
    })
    //load index.hmtl
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('closed', () => { win = null; });

}

app.on('ready', CreateWindow);
