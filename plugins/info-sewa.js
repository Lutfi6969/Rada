let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://telegra.ph/file/f82a7e100758c82e3a123.png`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `*Jika telah melakukan pembayaran silahkan kirimkan bukti pembayaran ke WhatsApp Owner.*`, m)
}

handler.help = handler.command = ['donasi','donate','sewa','sewabot','belibot']
handler.tags = ['main']
module.exports = handler
