const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unban",
    category: "moderation",
    run: async (client, message, args) => {

        const member = args[0];

        if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.channel.send(
          Embed = new MessageEmbed()
          .setTitle("Command: *unban")
          .setColor("BLACK")
          .setDescription("You dont\'t have permissions.")
          .addField("Usage:", "*unban [UserID]", true)
        );

        if (!member) {
             return message.channel.send(
                Embed = new MessageEmbed()
                .setTitle("Command: *unban")
                .setColor("BLACK")
                .setDescription("Specify an User ID")
                .addField("Usage:", "*unban [UserID]", true)     
             )
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(
            Embed = new MessageEmbed()
            .setTitle("Command: *unban")
            .setColor("BLACK")
            .setDescription(`<:YTVerifiedCheck:741445238853206037> User with ID ${member} got successfully unbanned.`)
            .addField("Usage:", "*unban [UserID]", true)
            )
        } catch (e) {
            return message.channel.send(
                Embed = new MessageEmbed()
                .setTitle("Command: *unban")
                .setColor("BLACK")
                .setDescription("An error has occurred.")
                .addField("Usage:", "*unban [UserID]", true)
            )
        }

    }
}