const fs = require("fs");
module.exports.config = {
  name: "HARTLESS",
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
  if(react.includes("HARTLESS") ||
     react.includes("hartless") || react.includes("Hartless") || react.includes("@Hartless Queen") ||
react.includes("@Masoom girl 🥀🦋💖") ||
react.includes("Masoom girl") ||     
react.includes("masoom")) {
    var msg = {
        body: `👉 𝐇𝐀𝐑𝐓𝐋𝐄𝐒𝐒 𝐐𝐔𝐄𝐄𝐍 👈`,attachment: fs.createReadStream(__dirname + `/noprefix/babu.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }