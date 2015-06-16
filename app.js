'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {

  // ブラウザ(Chromium)の起動, 初期画面のロード
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  // mainWindow.loadUrl('https://github.com');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
  console.log(mainWindow.webContents)
  mainWindow.webContents.on('will-navigate',function(a,url){
    console.log("+++++++++++++++++")
    console.log(url)
    console.log("+++++++++++++++++")
  })
});
