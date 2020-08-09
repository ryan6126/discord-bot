  
const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "dog",
    category: "animals",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/dog";
        const facts = "https://some-random-api.ml/facts/dog"

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
                .setTitle("Command: *dog")
                .setColor("BLACK")
                .setDescription("An error occurred, please try again later.")
                .addField("Usage:", "*dog", true)
            )
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Dog Image and Fact`)
            .setColor('BLACK')
            .setDescription(fact.fact)
            .setImage(image.link)
            .setFooter(`Requested by ${message.member.user.tag}`,message.member.user.displayAvatarURL());

        await message.channel.send(embed)
    }
}
