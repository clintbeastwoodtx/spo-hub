const { Command } = require('../../structures/Command');
const { RichEmbed } = require('discord.js')
class Help extends Command {
    constructor(client) {
        super(client, {
            name: "help",
            description: "Help",
            category: "General"
        })
    }
    async exec(message, args, client, guildColor, templateEmbed) {
      
      message.channel.send(templateEmbed.setColor("RED").setAuthor("NovelCOVID Help Command", this.client.user.displayAvatarURL).setDescription(`**General Commands**
\`cov all\` - Provides Global Information about the Coronavirus Outbreak`))
      
    }
}
                                                   
module.exports = Help;