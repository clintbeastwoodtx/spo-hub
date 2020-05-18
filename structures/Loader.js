const { walk } = require("walk");
const { resolve } = require("path");

class Loader {
  static loadCommands(client) {
    let i = 0;
    const walker = walk("./commands");
    walker.on("file", (root, stats, next) => {
      if (!stats.name.endsWith(".js")) return next();
      const Command = require(`${resolve(root)}/${stats.name}`);
      const command = new Command(client);
      if (!command.exec) return next();
      command.aliases.forEach(a => client.aliases.set(a, command.name));
      client.commands.set(command.name, command);
      i++;
      next();
    });
  }
  static loadEvents(client) {
    let i = 0;
    const eventwalker = walk("./events");
    eventwalker.on("file", (root, stats, next) => {
      const Event = require("../events/" + stats.name);
      client.on(stats.name.split(".")[0], (...args) =>
        Event.run(client, ...args)
      );
      next();
    });
  }
}

module.exports = { Loader };