const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "iq",
    description: "Get a random Iq returned",
    category: "games",
    run: async (client, message, args) => {
        const iq = Math.floor(Math.random() * 100) + 1;

        const embed = new MessageEmbed()
            .setTitle("Asteria IQ Test")
            .setDescription(`Your IQ is: ${iq}`)
            .setColor("BLACK")
            .setFooter(`${message.member.user.tag}`, message.member.user.displayAvatarURL())
            .setTimestamp();

        message.channel.send(embed);
    }
};