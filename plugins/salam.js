let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let salam = fs.readFileSync('./mp3/salam.opus') 
conn.sendFile(m.chat, salam, '', '', m, true)
}

handler.customPrefix = /^(assalamualaikum|p|halo)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
