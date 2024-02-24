const electron = require('electron')
const octicons = require("@primer/octicons")

const fs = require('fs')

console.log(fs)

const { contextBridge } = require('electron')


// This is weird, needs to be simplified (why key?)
contextBridge.exposeInMainWorld('test', {
  oct: oct,
})

function oct() {
  return octicons.x.toSVG()
}