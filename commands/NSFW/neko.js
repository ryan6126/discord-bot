const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "neko",
    description: "None",
    category: "nsfw",
    run: async (client, message, args) => {

        if (!message.channel.nsfw) return message.reply("This channel is not a NSFW channel!");

        const data = await fetch("https://nekobot.xyz/api/image?type=neko").then(res => res.json());

        const embed = new MessageEmbed()
            .setFooter(message.author.username)
            .setColor(data.color)
            .setTitle(`Here, u fucking weeb.`)
            .setImage(`${data.message}`)
            .setTimestamp();

        message.channel.send(embed);
    }
};