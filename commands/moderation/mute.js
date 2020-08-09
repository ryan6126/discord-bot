const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "mute",
    description: "Mute a user",
    category: "admin",
    usage: "mute <@user>",
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
  
      const muteUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[0])
      );
  
      if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send(
          Embed = new MessageEmbed()
          .setTitle("Command: *mute")
          .setColor("BLACK")
          .setDescription("You dont\'t have permissions.")
          .addField("Usage:", "*mute [user] [reason]", true)
      );

      if (!muteUser) {
        return message.channel.send(
           Embed = new MessageEmbed()
           .setTitle("Command: *mute")
           .setColor("BLACK")
           .setDescription("Specify an user.")
           .addField("Usage:", "*mute [user] [reason]", true)     
        )
   }

      if (muteUser.roles.cache.find((r) => r.name === "muted"))
        return message.channel.send(
            Embed = new MessageEmbed()
            .setTitle("Command: *mute")
            .setColor("BLACK")
            .setDescription(`${muteUser} is already muted.`)
            .addField("Usage:", "*mute [user] [reason]", true)
        );
  
      if (muteUser.hasPermission("MANAGE_ROLES"))
        return message.channel.send(
            Embed = new MessageEmbed()
            .setTitle("Command: *mute")
            .setColor("BLACK")
            .setDescription(`${muteUser} can\'t be muted.`)
            .addField("Usage:", "*mute [user] [reason]", true)
        );
  
      const muteReason = args.join(" ").slice(23);
  
      const muteRole =
        message.guild.roles.cache.find((r) => r.name === "muted") ||
        (await message.guild.roles.create({
          data: {
            name: "muted",
            color: "GRAY",
          },
          reason: "Mute a user",
        }));
  
      // overwrite permissions for every channel in the guild
      message.guild.channels.cache.forEach(async (channel) => {
        await channel.overwritePermissions([
          {
            id: muteRole.id,
            deny: ["SEND_MESSAGES", "ADD_REACTIONS"],
          },
        ]);
      });
  
      // Add role & send msg
      muteUser.roles.add(muteRole);
      muteUser.user.send(
        Embed = new MessageEmbed()
        .setTitle("Asteria")
        .setColor("BLACK")
        .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic: true}))
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`You've been **muted** from **${message.guild.name}**, Reason: **${muteReason}**`)
        .setFooter(`Muted by ${message.member.user.tag}`,message.member.user.displayAvatarURL())
      );
      message.channel.send(
        Embed = new MessageEmbed()
        .setTitle("Command: *mute")
        .setColor("BLACK")
        .setDescription(`${muteUser} was successfully muted from the server. Reason: **${muteReason}**`)
        .addField("Usage:", "*mute [user] [reason]", true)
      );
    },
  };