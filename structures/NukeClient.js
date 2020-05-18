const { Client, Collection } = require("discord.js");
class NukeClient extends Client {
  constructor(token, options) {
    super(options);
    this.token = token;
    this.commands = new Collection();
    this.aliases = new Collection();
    this.events = new Collection();
    this.prefix = 'spot ';
    this.color = 'RED';
    this.cooldown = new Map();
  }
  
  start() {
    this.login(this.token);
  }
  
}

module.exports = { NukeClient };
