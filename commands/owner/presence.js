//github.com/cybermonarch

/**
 *
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 */
const Discord = require('discord.js');

  
module.exports = {
name: "presence",
aliases: ["status"],
category: "utils",
description: "Command description",
usage: "!status (type)",
run: (client, message, args) => {
 if (message.author.id !== "OWNER ID") return;
 let errorembed = new Discord.MessageEmbed()
.setDescription('<a:OPDenied1:735452761117818940> Not a valid status type.')
.setColor('#ff0019')
.setFooter(`Requested by ${message.member.user.tag}`,message.member.user.displayAvatarURL({dynamic: true}));
let successembed = new Discord.MessageEmbed()
.setDescription('<a:success:735446448665133149> Status changed.')
.setColor('#228B22')
.setFooter(`Requested by ${message.member.user.tag}`,message.member.user.displayAvatarURL({dynamic: true}));
let errorembed2 = new Discord.MessageEmbed()
.setDescription('<a:OPDenied1:735452761117818940> Not enough arguments provided.')
.setColor('#ff0019')
.setFooter(`Requested by ${message.member.user.tag}`,message.member.user.displayAvatarURL({dynamic: true}));
let text = "";
let i = 0;
args.forEach(element => {
    if(i>0){
        text = text + " " + element;
    }else{
        i++;
    }
});   
message.delete();
    let status = args[0];
    switch(status){
        default:
            message.channel.send(errorembed).then(msg => {msg.delete({timeout:2000})}).catch(console.error)
            break;
        case "dnd":
            client.user.setStatus('dnd')
            message.channel.send(successembed).then(msg => {msg.delete({timeout:2000})}).catch(console.error)         
            break;
        case "idle":
            client.user.setStatus('idle')
            message.channel.send(successembed).then(msg => {msg.delete({timeout:2000})}).catch(console.error)
            break;
        case "online":
            client.user.setStatus('online')
            message.channel.send(successembed).then(msg => {msg.delete({timeout:2000})}).catch(console.error)
            break;
        case "streaming":
            if(text === "") { message.channel.send(errorembed2).then(msg => {msg.delete({timeout:2000})}).catch(console.error);}
            else{ client.user.setActivity(text, {url: "https://www.twitch.tv/?", type: "STREAMING" })
            .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
            .catch(console.error);
            message.channel.send(successembed).then(msg => {msg.delete({timeout:2000})}).catch(console.error);
          }
            break;
        case "watching":
            if(text === "") { message.channel.send(errorembed2).then(msg => {msg.delete({timeout:2000})}).catch(console.error);}
            else{  client.user.setActivity(text, {type: 'WATCHING' })
            .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
            .catch(console.error);
            message.channel.send(successembed).then(msg => {msg.delete({timeout:2000})}).catch(console.error);
            }
            break;
        case "listening":
            if(text === "") { message.channel.send(errorembed2).then(msg => {msg.delete({timeout:2000})}).catch(console.error);}
            else{  client.user.setActivity(text, { type: 'LISTENING' })
            .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
            .catch(console.error);
            message.channel.send(successembed).then(msg => {msg.delete({timeout:2000})}).catch(console.error);
            }
            break;
        
            
            
    }

  }
}
