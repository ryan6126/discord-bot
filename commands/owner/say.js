module.exports = {
    name: "say",
    description: "Let the bot say something",
    category: "owner",
    run: async (client, message, args) => {
        if (message.author.id !== '618266942288953345') {
            return;
        }
        message.delete();
        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.reply("Sorry, You don't have the correct permissions for this command.");
        const msg = args.join(" ");

        message.channel.send(msg);
    }
};