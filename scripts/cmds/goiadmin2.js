module.exports = {
	config: {
		name: "goiadmin",
		author: "Rômeo",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "tools",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "61557094816783") {
		var aid = ["61557094816783"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["Tag Admin again, I'll punch you", "Tag Admin again, I'll punch you", "Tag Admin again, I'll punch you"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};