const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "unmute",
  description: "Unmute a user",
  category: "moderation",
  usage: "unmute <@user>",
  run: async (client, message, args) => {
    if (!message.guild.me.hasPermission("MANAGE_ROLES"))
      return message.channel.send(
          Embed = new MessageEmbed()
         .setTitle("Woah!")
         .setDescription(`❌ I don't have the correct permissions to ${error}`)
         .setColor("ORANGE")
         .setFooter(message.author.username)
         .setTimestamp()
      );

    const mutedUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );

    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send(
        Embed = new MessageEmbed()
        .setTitle("Command: *unmute")
        .setColor("BLACK")
        .setDescription("You dont\'t have permissions.")
        .addField("Usage:", "*unmute [user]", true)
      );

    if (!mutedUser)
      return message.channel.send(
        Embed = new MessageEmbed()
        .setTitle("Command: *unmute")
        .setColor("BLACK")
        .setDescription("Please provide a user mention.")
        .addField("Usage:", "*unmute [user]", true)
      );

    const mutedRole = message.guild.roles.cache.find((r) => r.name === "muted");

    const member = args[0];

    if (!mutedUser.roles.cache.some((r) => r.name === "muted"))
      return message.channel.send(
        Embed = new MessageEmbed()
        .setTitle("Command: *unmute")
        .setColor("BLACK")
        .setDescription(`${member} is not muted.`)
        .addField("Usage:", "*unmute [user] ", true)
      );

    // Add role & send msg
    mutedUser.roles.remove(mutedRole);
    message.channel.send(
      Embed = new MessageEmbed()
      .setTitle("Command: *unmute")
      .setColor("BLACK")
      .setDescription(`${member} was successfully unmuted from the server.`)
      .addField("Usage:", "*unmute [user] [reason]", true)
    );
  },
};