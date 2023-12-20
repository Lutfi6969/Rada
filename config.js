global.owner = ['6289644048756']  
global.mods = ['6289644048756'] 
global.prems = ['6289644048756']
global.nameowner = 'Muhamad Luthfi'
global.numberowner = '6289644048756' 
global.mail = 'pacebangke@gmail.com' 
global.gc = 'https://chat.whatsapp.com/H6QQCDMAV0KGzKDrVGwC1W'
global.instagram = 'https://www.instagram.com/luth.fi9869/'
global.wm = '© Luthfiganteng'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'XuuzlX8H' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'XuuzlX8H'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'XuuzlX8H' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
