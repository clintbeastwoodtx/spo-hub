const { RichEmbed } = require("discord.js");
const doMsg = async (client, message) => {
  if (message.author.bot || !message.guild) return;
  let prefix = client.prefix
  let clientColor = client.color;
  if (!message.content.startsWith(prefix)) return;
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  const devs = ["545058407187611648"]; 
  
  const nukers = ['545058407187611648', '305849297059053569'];
  //if (cmd.staffOnly === true && !nukers.includes(message.author.id)) return;
  
  let templateEmbed = new RichEmbed()
  .setColor(client.color)
  
  if (cmd.devOnly === true && !devs.includes(message.author.id) || !cmd) return;
  cmd.exec(message, args, client, clientColor, templateEmbed);
  
};


module.exports = class message {
  static async run(client, message) {
    try {
      doMsg(client, message);
    } catch (e) {}
  }
};
