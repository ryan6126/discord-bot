const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);
  let m = 0;
  let i = 0;
  client.guilds.cache.forEach(g => {
  m = m + g.memberCount;
  i++;
  });
  client.user.setActivity(m + " Users | "+i+" Servers",  {url: "https://www.twitch.tv/?", type: "STREAMING" });
  new Array(1000).fill().map((_, i) => console.log(i));
  });
   

client.on("messageDelete", async message => {

});

const prefix = "*"


client.on("message", async message => {
  const prefix = "*";
  
  if(!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  
  if (cmd.length === 0) return;
  
  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  // If a command is finally found, run the command
  if (command) 
      command.run(client, message, args);

});


client.login("NzQxMzYzNTE2Mjc0OTAxMDIy.Xy2elA.bye4YEg1NOyFLNV6EydtMHGh-2Q");
