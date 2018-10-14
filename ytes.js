const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const fs = require('fs'); // npm i fs
const ms = require('ms'); // npm i ms
const child_process = require('child_process')

const prefix = '--'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


const adminprefix = "--";
const devs = ['501091319045947413'];
client.on('message', message => {//for dev
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);   message.channel.sendMessage(`**${argresult} The bot playing has been changed to**`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : The name of the bot has been changed to`)
return message.reply("**You can not change the name. You must stay for two hours . . . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
      } else
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/rakanoolive");
    message.channel.sendMessage(`**Twitch has been changed to ${argresult}**`)
}


client.on('message', message => {//restart
    if(message.content === adminprefix + "restart") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`⚠️ **The person who restarted the bot ${message.author.username}**`);
            console.log(`⚠️ Restarting bot ... ⚠️`);
            client.destroy();
            child_process.fork(__dirname + "/bot.js");
            console.log(`The bot was restarted`);
              message.channel.send(`⚠️ **The bot was restarted**`);
        }


    });
});




  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "obc")) {
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox: ・عدد الرسائل المستلمة `); 
   message.delete();
    }
});





client.login(process.env.BOT_TOKEN);
