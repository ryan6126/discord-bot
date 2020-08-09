const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "lock",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) {
            return message.channel.send(
              Embed = new MessageEmbed()
            .setTitle("Command: *lock")
            .setColor("BLACK")
            .setDescription("You don\'t have enough perms.")
            .addField("Usage:", "*lock [on/off]", true)
            )
        }
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            return message.channel.send(
                Embed = new MessageEmbed()
                .setTitle("Command: *lock")
                .setColor("BLACK")
                .setDescription("Locked all channels..")
                .addField("Usage:", "*lock [on/off]", true)
            );
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                }).then(() => {
                        channel.setName(channel.name.replace('🔒', ''))
                    }
                )
            })
            return message.channel.send(
                Embed = new MessageEmbed()
                .setTitle("Command: *lock")
                .setColor("BLACK")
                .setDescription("Unlocked all channels..")
                .addField("Usage:", "*lock [on/off]", true)
            )
        }
    }
}