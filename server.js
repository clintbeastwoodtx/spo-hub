var express = require("express");
var app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const { NukeClient } = require("./structures/NukeClient");
const { Loader } = require("./structures/Loader");
const { RichEmbed } = require("discord.js");
const client = new NukeClient(process.env.TOKEN);

Loader.loadCommands(client);
Loader.loadEvents(client);
client.start();

client.on("ready", () => {
  console.log("SPOTTY Hub is now online")
  client.user.setActivity("All six SPOTTY nodes are online. No updates.");
});

String.prototype.titleCase = function() {
  var splitStr = this.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};
