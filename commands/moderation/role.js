const Discord = ('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "role",
    description: "Add a role to a user",
    category: "moderation",
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
  
      if (!message.member.hasPermission("MANAGE_ROLES" || "ADMINISTRATOR"))
        return message.channel.send(
            Embed = new MessageEmbed()
            .setTitle("Command: *role")
            .setColor("BLACK")
            .setDescription("You don\'t have permissions.")
            .addField("Usage:", "*role [user] [role]", true)
        );

      const needsRole =
        message.guild.member(message.mentions.users.first()) ||
        message.guild.members.cache.get(args[0]);
  
      const role =
        message.guild.roles.cache.find(
          (role) => role.name === args.join(" ").slice(23)
        ) || message.mentions.roles.first();
  
      if (!needsRole) return message.channel.send(
        Embed = new MessageEmbed()
        .setTitle("Command: *role")
        .setColor("BLACK")
        .setDescription("User wasn\'t found.")
        .addField("Usage:", "*role [user] [role]", true)
      );

      if (!role) return message.channel.send(
        Embed = new MessageEmbed()
        .setTitle("Command: *role")
        .setColor("BLACK")
        .setDescription("Please provide a valid role.")
        .addField("Usage:", "*role [user] [role]", true)
      );

      if (needsRole.roles.cache.some((r) => role.id === r.id))
        return message.channel.send(
            Embed = new MessageEmbed()
            .setTitle("Command: *role")
            .setColor("BLACK")
            .setDescription("User has already this role.")
            .addField("Usage:", "*role [user] [role]", true)
        );
  
      needsRole.roles.add(role.id);
  
      message.channel.send(
        Embed = new MessageEmbed()
        .setTitle("Command: *role")
        .setColor("BLACK")
        .setDescription(`Successfully added **${role.name}** to ${needsRole}`)
        .addField("Usage:", "*role [user] [role]", true)
      )
    }
  }
  