const fs = require("fs");
module.exports.config = {
        name: "fuck",
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
        if (event.body.indexOf("FUCK YOU")==0 || event.body.indexOf("Fuck you")==0 || event.body.indexOf("FUCK U")==0 || event.body.indexOf("Fuck u")==0) {
                var msg = {
                                body: "🤣😂 𝐌𝐄𝐑𝐄 𝐒𝐀𝐓𝐇 𝐆𝐀𝐌𝐄 𝐊𝐇𝐄𝐋𝐄𝐆𝐀 🤣😂",
                                attachment: fs.createReadStream(__dirname + `/AADI/Messenger_creation_1253019069211350.jpeg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }