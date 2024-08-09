const fs = require("fs");
module.exports.config = {
	name: "Kattar",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("JIDDI") ||
     react.includes("") || react.includes("") || react.includes("") ||
react.includes("") ||
react.includes("KATTAR")) {
		var msg = {
				body: `Bete yha se marna chalu karunga aur india border tak gand me chappal marte le jaunga samjha😹`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

