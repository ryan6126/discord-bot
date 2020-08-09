
module.exports = {
    name: "restart",
    category: "owner",
    run: async (client, message, args) => {
        if (message.author.id !== '618266942288953345') {
            return;
        }
        await message.channel.send(`Im out.`)
        process.exit();
    }
}