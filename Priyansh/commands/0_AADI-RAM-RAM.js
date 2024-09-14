const fs = require("fs");
module.exports.config = {
        name: "Ram",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("JAY SHREE RAM")==0 || event.body.indexOf("Jay shree ram")==0 || event.body.indexOf("jay shree ram")==0 || event.body.indexOf("Jay Shri Ram")==0) {
                var msg = {
                                body: "__🥰  𝐌𝐀𝐈𝐍 𝐓𝐎 𝐒𝐇𝐑𝐄𝐄 𝐑𝐀𝐌 𝐉𝐈  𝐊𝐀 𝐃𝐄𝐄𝐖𝐀𝐍𝐀 𝐇𝐔 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐉𝐀𝐘 𝐒𝐇𝐑𝐄𝐄 𝐑𝐀𝐌 😍 ❤️",
                                attachment: fs.createReadStream(__dirname + `/AADI/#ram_#ramlalaa_#ayodhya_#siyaram_in_2024_|_Ram_photos,_Shree_ram_photos,_Shri_ram_photo(360P).mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }