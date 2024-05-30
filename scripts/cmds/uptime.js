module.exports = {
    config: {
       name: 'uptime',
       version: '5.8',
       role: 0,
       category: 'SySteM',
       longDescription: 'Check bot uptime',
       author: 'UPoL',
       guide: {
         en: '{p}{n}'
        },
    },
    onStart: async function ({ api, event, message }) {
         const uptime = process.uptime();
         const hours = Math.floor((uptime % (60 * 60 * 24) / (60 * 60)));
         const minutes = Math.floor((uptime % (60 * 60)) / 60);
         const seconds = Math.floor(uptime % 60);

         const UPoL = `The bot running time:\n\n ${hours}hrs : ${minutes}mins : ${seconds}sec`;
         message.reply(UPoL);
       } 
  };
