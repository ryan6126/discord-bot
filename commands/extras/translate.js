const { MessageEmbed } = require("discord.js");
const translate = require("@k3rn31p4nic/google-translate-api");

module.exports = {
    name: "translate",
    description: "Translate a sentence",
    usage: "*translate <language> <sentence>",
    category: "extras",
    run: async (client, message, args) => {
        const result = await translate(args.slice(1).join(" "), { to: args[0] });
        
        const embed = new MessageEmbed()
            .setDescription(result.text)
            .setThumbnail(client.user.displayAvatarURL())
            .setColor("BLACK")
            .setFooter("Usage: *translate <language> <sentence>")
            .setTitle("Asteria Translate");

        message.channel.send(embed);
    }
};