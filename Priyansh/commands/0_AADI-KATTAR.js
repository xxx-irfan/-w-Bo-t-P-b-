const fs = require("fs");
module.exports.config = {
  name: "KATTAR",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Jaddi") ||
     react.includes("@Jiddi girl 🥵") || react.includes("boyfriend") || react.includes("@Kattar Thakurain") ||
react.includes("Kattar") ||
react.includes("kattar") ||     
react.includes("KATTAR")) {
    var msg = {
        body: `𝐍𝐀𝐀𝐌 𝐒𝐔𝐍𝐊𝐀𝐑 𝐅𝐋𝐎𝐖𝐄𝐑 𝐒𝐀𝐌𝐉𝐇𝐀 𝐇𝐀𝐈 𝐊𝐘𝐀 𝐅𝐈𝐑𝐄 𝐇𝐀𝐈 𝐌𝐀𝐈 𝐊𝐀𝐓𝐓𝐀𝐑 𝐐𝐔𝐄𝐄𝐍 😁😁`,attachment: fs.createReadStream(__dirname + `/noprefix/bf.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }