const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bans",
    category: "extra",
    run: async (client, message, args) => {

        message.guild.fetchBans().then(bans => {
            message.channel.send(
            embed = new MessageEmbed()
            .setTitle("Total members banned.")
            .setAuthor("Command: *bans")
            .setDescription(`${bans.size}`)
            .setColor("BLACK")
        )}
    )}
}
