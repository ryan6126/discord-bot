//github.com/ryan6126
//contact if any errors


const Discord = require('discord.js');

/**
 *
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 */


module.exports = {
  name: "eval",
  aliases: ["code","exe"],
  category: "moderation",
  description: "Command description",
  usage: "*eval (code)",
  run: (client, message, args) => {
    if (message.author.id !== "OWNER ID") return;
    //never remove this line above ^
      function clean(text) {
       if (typeof (text) === "string")
         return text.replace(/`/g, "`" + String.fromCharCode(8203))
         .replace(/@/g, "@" + String.fromCharCode(8203));
       else
         return text;
    
      }
    
       try {
         var code = args.join(" ");
         var evaled = eval(code);
    
         if (typeof evaled !== "string")
           evaled = require("util")
           .inspect(evaled);
           //message.channel.send("xl", clean(evaled));
       } catch (err) {
         message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
       }
  }
}
