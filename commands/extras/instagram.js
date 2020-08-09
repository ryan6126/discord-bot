const axios = require('axios')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "ig",
    category: "extra",
    run: async (client, message, args) => {
        if (!args[0]) {
            return message.channel.send(`Please Enter a Channel Name`)
        }
        let url, response, account, details;
        try {
            url = `https://instagram.com/${args[0]}/?__a=1`;
            response = await axios.get(url)
            account = response.data
            details = account.graphql.user
        } catch (error) {
            return message.channel.send(`Not A Account`)
        }

        const embed = new MessageEmbed()
            .setTitle(`${details.is_verified ? `${details.username} <a:YTverified:741442045628907613>` : ` ${details.username}`} ${details.is_private ? '🔒' : ''} `)
            .setDescription(details.biography)
            .setColor('#FCB23C')
            .setThumbnail(details.profile_pic_url)
            .addFields(
                {
                    name: "Total Posts:",
                    value: details.edge_owner_to_timeline_media.count.toLocaleString(),
                    inline: true
                },
                {
                    name: "Followers:",
                    value: details.edge_followed_by.count.toLocaleString(),
                    inline: true
                },
                {
                    name: "Following:",
                    value: details.edge_follow.count.toLocaleString(),
                    inline: true
                }
            )
        await message.channel.send(embed)

    }
}