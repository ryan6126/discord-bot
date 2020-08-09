
module.exports = {
    name: "restart",
    category: "owner",
    run: async (client, message, args) => {
        if (message.author.id !== 'OWNER ID') {
            return;
        }
        await message.channel.send(`Im out.`)
        process.exit();
    }
}
