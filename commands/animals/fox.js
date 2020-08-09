const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "fox",
    category: "animals",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/fox";
        const facts = "https://some-random-api.ml/facts/fox"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(
                Embed = new MessageEmbed()
                .setTitle("Command: *fox")
                .setColor("BLACK")
                .setDescription("An error occurred, please try again later.")
                .addField("Usage:", "*fox", true)
            )
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Fox Image and Fact`)
            .setColor('BLACK')
            .setDescription(fact.fact)
            .setImage(image.link)
            .setFooter(`Requested by ${message.member.user.tag}`,message.member.user.displayAvatarURL());

        await message.channel.send(embed)
    }
}