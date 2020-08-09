const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "ass",
    description: "None",
    category: "nsfw",
    run: async (client, message, args) => {

        if (!message.channel.nsfw) return message.reply("This channel is not a NSFW channel!");

        const data = await fetch("http://api.obutts.ru/butts/0/1/random").then(res => res.json());

        const embed = new MessageEmbed()
            .setFooter(message.author.username)
            .setColor(data.color)
            .setTitle('Here, take some ass.')
            .setImage(`http://media.obutts.ru/${data[0].preview}`)
            .setTimestamp();

        message.channel.send(embed);
    }
};
