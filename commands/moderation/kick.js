const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "kick",
  description: "Kick a user",
  category: "admin",
  run: async (client, message, args) => {
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        Embed = new MessageEmbed()
        .setTitle("Woah!")
        .setDescription(`❌ I don't have the correct permissions to ${error}`)
        .setColor("ORANGE")
        .setFooter(message.author.username)
        .setTimestamp()
      );

    const member = args[0];

    const kickUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );
    const kickReason = args.join(" ").slice(23);

    if (!message.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR"))
    return message.channel.send(
      Embed = new MessageEmbed()
      .setTitle("Command: *kick")
      .setColor("BLACK")
      .setDescription("You dont\'t have permissions.")
      .addField("Usage:", "*kick [user] [reason]", true)
    );
    
    if (!kickUser) {
      return message.channel.send(
         Embed = new MessageEmbed()
         .setTitle("Command: *kick")
         .setColor("BLACK")
         .setDescription("Specify an user.")
         .addField("Usage:", "*kick [user] [reason]", true)     
      )
 }      
        
      if (!kickUser.kickable || kickUser.hasPermission("KICK_MEMBERS"))
        return message.channel.send(
          Embed = new MessageEmbed()
          .setTitle("Command: *kick")
          .setColor("BLACK")
          .setDescription(`${member} can\'t be kicked.`)
          .addField("Usage:", "*kick [user] [reason]", true)
      );

    kickUser.kick(kickReason);

    kickUser.user.send(
      Embed = new MessageEmbed()
      .setTitle("Asteria")
      .setColor("BLACK")
      .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic: true}))
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(`You've been **kicked** from **${message.guild.name}**, Reason: **${kickReason}**`)
      .setFooter(`Kicked by ${message.member.user.tag}`,message.member.user.displayAvatarURL())
      );
    message.channel.send(
      Embed = new MessageEmbed()
      .setTitle("Command: *kick")
      .setColor("BLACK")
      .setDescription(`${member} was successfully kicked from the server. Reason: **${kickReason}**`)
      .addField("Usage:", "*kick [user] [reason]", true)
      );
  },
};