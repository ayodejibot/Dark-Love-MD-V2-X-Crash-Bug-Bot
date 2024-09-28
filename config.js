/*
       RESMI DARI ZYNXZOO [ D.E.V ]

  LARANGAN
 
- DI LARANG MEMPERJUAL SC ZYNXZOO
- DI LARANG MEMPERBAGI SC ZYNXZOO

JIKA MELANGGAR LARANGAN YANG DI BERIKAN ZYNXZOO, YAPIT SE UMUR HIDUP + 7 TURUNAN

JANGAN LUPA SUPPORT

*/

global.prefa = ['','!','.',',','🐤','🗿'] 
// Setting Contact
global.namaown = "Dark-Love-MD X Crash Bug Bot"
global.namabot = "Dark-Love-MD X Crash Bug Bot"
global.versisc = "10.0"
global.owner = ["234812244124"]
global.tele = "https://t.me/darklovemd"
global.url = "https://www.youtube.com"
global.namastore = "Dark-Love-MD V2 X Crash Bug Bot"

// Global Simbol
global.simbol = "ᯤ"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Global Respon
global.mess = {
    success: '𝗗𝗼𝗻𝗲 𝗕𝗿𝗼',
    admin: `\`[ # ]\` _Add this bot as the admin to carry out this action/command_ !`,
    botAdmin: `\`[ # ]\` _This feature can only be used when the bot is a group admin_ !`,
    OnlyOwner: `\`[ # ]\` _This feature can be used by Awesome owner only_!`,
    OnlyGrup: `\`[ # ]\` _This feature can be used in groups only_ !`,
    private: `\`[ # ]\` _This feature/command is only for private chats only_ !`,
    wait: `\`[ # ]\` Dark-Love-MD V2 X Crash Bug Bot in process...`,
    notregist: `\`[ # ]\` _You are not yet registered_`,
    premium: `\`[ # ]\` _This feature can be used by premium users only_`,
    endLimit: `\`[ # ]\` endless limit`,
     bugrespon: `\`[ # ]\` 𝘝𝘪𝘳𝘶𝘴 𝘈𝘵𝘵𝘢𝘤𝘬`,
     donebug: `\`[ # ]\` 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴
     𝘝𝘪𝘳𝘶𝘴`,
}


// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})