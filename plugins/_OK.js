const { sticker } = require('../lib/sticker.js')
let handler = async (m, { conn, text, usedPrefix, command }) => {

global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let stiker = await sticker(null, global.API(`https://telegra.ph/file/f61a7c96f3f86b6c5214f.png`), global.packname, global.author)
 conn.sendFile(m.chat, stiker, 'sticker.webp', '', fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 9999999,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'https://youtube.com/channel/UCh9Exbsk9406zuCdCorZwIg',
    mediaType: 2, 
    description: 'https://youtube.com/channel/UCh9Exbsk9406zuCdCorZwIg',
    title: "Tunggu Sebentar Stah",
    body: wm,
    thumbnail: await (await fetch('https://i.ibb.co/CWx7LWQ/20221114-123229.jpg')).buffer(),
    sourceUrl: 'https://youtube.com/channel/UCh9Exbsk9406zuCdCorZwIg'
  }
  } })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
