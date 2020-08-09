const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "mc",
  description: "Get info about a minecraft server",
  category: "extras",
  run: async (client, message, args) => {
    const server = args[0];

    if (!server) return message.reply(
        Embed = new MessageEmbed()
        .setTitle("Command: *minecraft")
        .setColor("BLACK")
        .setDescription("Please provide a server ip.")
        .addField("Usage:", "*minecraft [ServerIP]", true)
    );

    const url = `https://mcapi.us/server/status?ip=${server}`;
    const data = await fetch(url).then((res) => res.json());

    if (!data.server.name) return message.channel.send(
        Embed = new MessageEmbed()
        .setTitle("Command: *minecraft")
        .setColor("BLACK")
        .setDescription("Server wasn\'t found.")
        .addField("Usage:", "*minecraft [ServerIP]", true)
    );

    const status = data.online ? "Online" : "Offline";
    const players = data.players.now;
    const maxPlayers = data.players.max;
    const description = data.motd;
    const version = data.server.name;
    const protocol = data.server.protocol;
    
    const embed = new MessageEmbed()
      .setTitle(server)
      .addField("**Status**", status, true)
      .addField("**Players**", players, true)
      .addField("**Max Players**", maxPlayers, true)
      .addField("**Version**", version, true)
      .addField("**Protocol**", protocol, true)
      .addField("**Description**", description)
      .setColor("BLACK")
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter(message.author.username);

    message.channel.send(embed);
  },
};