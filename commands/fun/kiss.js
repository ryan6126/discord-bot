const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "kiss",
    description: "Shows a picture of people kissing",
    category: "games",
    run: async (client, message, args) => {
        const data = await fetch("https://nekos.life/api/kiss").then(res => res.json());

        const embed = new MessageEmbed()
            .setColor("BLACK")
            .setTitle(`${message.author.username} is kissing ${message.mentions.users.first().username || message.mentions.members.first()}`)
            .setImage(`${data.url}`)

        message.channel.send(embed);
    }
};