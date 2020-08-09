const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "boobs",
    description: "None",
    category: "nsfw",
    run: async (client, message, args) => {

        if (!message.channel.nsfw) return message.reply("This channel is not a NSFW channel!");

        const data = await fetch("http://api.oboobs.ru/boobs/0/1/random").then(res => res.json());

        const embed = new MessageEmbed()
            .setFooter(message.author.username)
            .setColor(data.color)
            .setTitle('Here, take some boobs.')
            .setImage(`http://media.oboobs.ru/${data[0].preview}`)
            .setTimestamp();

        message.channel.send(embed);
    }
};