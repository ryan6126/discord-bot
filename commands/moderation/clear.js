const Discord = require("discord.js")

module.exports = {
    name: "clear",
    aliases: ["purge","nuke"],
    category: "utils",
    description: "Command description",
    usage: "*clear",
    run: (client, message) => {
    const messageArray = message.content.split(' ');
    const args1 = messageArray.slice(1);



    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(
        Embed = new Discord.MessageEmbed()
        .setTitle("Command: *purge")
        .setColor("BLACK")
        .setDescription("You don\'t have permissions.")
        .addField("Usage:", "*purge [amount]", true)   
    );

    let deleteAmount;

    if (isNaN(args1[0]) || parseInt(args1[0]) <= 0) { return message.channel.send(
        Embed = new Discord.MessageEmbed()
        .setTitle("Command: *purge")
        .setColor("BLACK")
        .setDescription("That\'s not a number.")
        .addField("Usage:", "*purge [amount]", true)   

    );
    
}

    if (parseInt(args1[0]) > 100) {
        return message.channel.send(
        embed = new Discord.MessageEmbed()
        .setTitle("Command: *purge")
        .setColor("BLACK")
        .setDescription("You can only delete 100 messages.")
        .addField("Usage:", "*purge [amount]", true)   
        );

    } else {
        deleteAmount = parseInt(args1[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.channel.send(
        embed = new Discord.MessageEmbed()
        .setTitle("Command: *purge")
        .setColor("BLACK")
        .setDescription(`You deleted ${deleteAmount} messages.`)
        .addField("Usage:", "*purge [amount]", true)   
    )
}
    
}