const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://youtube.com/channel/UCh9Exbsk9406zuCdCorZwIg* (Wajib Subs Kalau Ga subs Gw Doain Error Mampus lu)
sc ini: https://youtu.be/CZYNydJe0II
Tinggal Like and Subscribe Apa Susah Nya sih bang🥲`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'O W N E R','.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://instagram.com/shendyeditz?igshid=YmMyMTA2M2Y=",
    mediaType: "VIDEO",
    description: "https://instagram.com/shendyeditz?igshid=YmMyMTA2M2Y=", 
    title: '𝑆𝐸𝑇𝑌𝐴 𝐵𝑜𝑡 彡',
    body: wm,
    thumbnail: thumb,
    sourceUrl: urlnya
  }
  } }) 
          }
handler.help = ['script']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

module.exports = handler