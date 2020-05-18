const { Command } = require('../../structures/Command');
const { RichEmbed } = require('discord.js')
class Eval extends Command {
    constructor(client) {
        super(client, {
            name: "eval",
            aliases: ['ev', 'e'],
            description: "Runs a JavaScript Code (DEV ONLY)",
            devOnly: true,
            category: "Owner"
        })
    }
    async exec(message, args, guildColor, templateEmbed) {

      let aTime = Date.now();
      
        try {
          
            let depth = 0;

            let code = args.join(" ")
            if (!code) throw new TypeError('Provide a code you dumb piece of shit.');
          
            if (message.flags.a) { code = `(async() => {\n${code}\n})()`; }
          
            if (message.flags.s) return await eval(code);
          
            if (message.flags.d && message.flags['=']) { for (let i = 0; i < 9; i++) { if (message.flags[i]) depth = i; } }

            let evaled = await eval(code);
            
            if (typeof evaled !== "string") evaled = require("util").inspect(evaled, { "depth": parseInt(depth) });
          
            if (clean(evaled).length >= 2000) {
               let a = await (await require("node-fetch")('https://bin.lunasrv.com/documents', { method: 'POST', body: clean(evaled), headers: { 'Content-Type': 'text/plain' },})).json()
               return message.channel.send(`Evaluated in \`${Date.now() - aTime}ms\`\n\`\`\`js\n${clean(evaled).slice(0, 1000)}\`\`\``, templateEmbed.setDescription(`[Full Output](https://bin.lunasrv.com/${a.key})`));
            } else return message.channel.send(`Evaluated in \`${Date.now() - aTime}ms\`\n\`\`\`js\n${clean(evaled)}\`\`\``);
        } catch (err) { message.channel.send(`Evaluated in \`${Date.now() - aTime}ms\`\n\nAn error occurred:\`\`\`diff\n- ${clean(err)}\`\`\``) }

            function clean(text) {
                if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
                else return text;
            }
      

    }
}

module.exports = Eval;
