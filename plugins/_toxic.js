let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let toxic = fs.readFileSync('./mp3/apaan.opus') 
conn.sendFile(m.chat, toxic, '', '', m, true)
}

handler.customPrefix = /^(kontol|bgst|kntl|pepek|mmk|ppk|jnck|anj|bangsat|bangsad|bgsd|ngntd|memek|jembut|jancok|fuck|ajg|anjing|ngentod)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
