const { Command } = require("../../structures/Command");
const { RichEmbed } = require("discord.js");
class All extends Command {
    constructor(client) {
        super(client, {
            name: "all",
            aliases: ["a"],
            description: "View global information about the coronavirus outbreak!",
            category: "General"
        });
    }
    async exec(message, args, guildColor, templateEmbed) {
        let data = await require("node-fetch")("https://disease.sh/v2/all").then(x=>x.json())
        if (!data || data.length <= 0) return message.channel.send(new RichEmbed().setColor(this.client.color).setDescription("Data could not be retrieved.")
            .setFooter("Most likely an API outage."));
      
        

        let totalCases = data.cases;
        let casesToday = data.todayCases;
        let criticalPatients = data.critical;
        let totalDeaths = data.deaths;
        let deathsToday = data.todayDeaths;
        let recoveredPatients = data.recovered;

        message.channel.send(new RichEmbed().setColor(this.client.color)
            .setAuthor(`Global Statistics for the Coronavirus Outbreak`, this.client.user.displayAvatarURL)
            .addField("Cases", totalCases.toLocaleString(), true)
            .addField("Cases Today", casesToday.toLocaleString(), true)
            .addField("Critical Patients", criticalPatients.toLocaleString(), true)
            .addField("Deaths", totalDeaths.toLocaleString(), true)
            .addField("Deaths Today", deathsToday.toLocaleString(), true)
            .addField("Recovered Patients", recoveredPatients.toLocaleString(), true)
            .setFooter("Last Updated on")
            .setTimestamp(data.updated)
        );
    }
}

module.exports = All;