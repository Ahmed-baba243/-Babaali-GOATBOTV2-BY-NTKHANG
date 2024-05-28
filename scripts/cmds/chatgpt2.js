const axios = require('axios');

const Prefixes = [
  'ask',
  'heaven',
  'ai',
  'bot',
  'Ai',
];

module.exports = {
  config: {
    name: "chatgpt2",
    version: 1.0,
    author: "ArYAN",
    role: 0,
    shortDescription: "Ask question to ChatGPT",
    longDescription: "Interact as ChatGPT provided by OpenAi. This command allows users to interact with the AI, asking various questions and receiving detailed answers.",
    category: "ai",
    guide: {
      en: "{p}ai [ question ] - Replace '{p}' with your command prefix and 'question' with your actual query.",
    },
  },
  
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
      if (!prompt) {
        await message.reply("🧘‍♀️𝙃𝙀𝘼𝙑𝙀𝙉🧘‍♀️\n\n𝐇𝐄𝐀𝐕𝐄𝐍(☞ ᐛ )☞........𝐨𝐧𝐥𝐲 𝐮𝐩𝐝𝐚𝐭𝐞 𝐚𝐢 𝐢𝐧 𝐭𝐨𝐰𝐧 ヾ(＾-＾)ノ");
        return;
      }
      api.setMessageReaction("⏰", event.messageID, (err) => {}, true);
      const response = await axios.get(`https://himachalwale.onrender.com/api/chatgpt?prompt=${encodeURIComponent(prompt)}&apikey=©himachalwale`);
      const answer = response.data.fullResponse;
      await message.reply(answer);
      api.setMessageReaction("✅", event.messageID, (err) => {}, true);
    } catch (error) {
      console.error("Error:", error.message, error.response?.data);
      api.setMessageReaction("❌", event.messageID, (err) => {}, true);
    }
  }
};
