const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(
              Embed = new MessageEmbed()
            .setTitle("Command: *ban")
            .setColor("BLACK")
            .setDescription("You don\'t have enough perms.")
            .addField("Usage:", "*ban [user] [reason]", true)
            )
        }
        if (!args[0]) {
            return message.channel.send(
              Embed = new MessageEmbed()
              .setTitle("Command: *ban")
              .setColor("BLACK")
              .setDescription("Please define a user.")
              .addField("Usage:", "*ban [user] [reason]", true)
            )
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.ban();
            await message.channel.send(
              Embed = new MessageEmbed()
              .setTitle("Command: *ban")
              .setColor("BLACK")
              .setDescription(`${member} was successfully banned.`)
              .addField("Usage:", "*ban [user] [reason]", true)
            )
        } catch (e) {
            return message.channel.send(
              Embed = new MessageEmbed()
              .setTitle("Command: *ban")
              .setColor("BLACK")
              .setDescription("I can\'t ban this user.")
              .addField("Usage:", "*ban [user] [reason]", true)
            )
        }

    }
}
