const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

client.on("ready", () => {
  console.log("Ativado.");
   let gameloop = require('./comando_dono/loop.js'); // Ativaidae de status!!!!!!!!!!
    gameloop.run(client);
})
 
client.on('guildMemberAdd', member => { 
    
  let embed = new Discord.RichEmbed()
.addField("Você é um bot?", "Clique no emoji abaixo para completar a verificação! ")
.setColor('#FF0000')
.setAuthor(`Moreiraw - Verificação`, 'https://cdn.discordapp.com/attachments/444957023130353674/462671084907528213/460264772869554176.gif')
.setTimestamp();



member.guild.channels.get('481642634968956949').send(`** ** ` + `<@` + member.user.id  + `>`);

member.guild.channels.get('481642634968956949').send(embed).then(cona=> {
  cona.react('✅')
})
 

  })




client.on('messageReactionAdd', (reaction, user) => {
  if(reaction.emoji.name === "✅" && user.id !== client.user.id) {
       reaction.remove(user)
       client.guilds.get("446432308086702081").members.get(user.id).addRole('446437846593699841')
       client.guilds.get("446432308086702081").members.get(user.id).removeRole('481642715810103337')
       
  }
})

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:
 
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
 
});
 
client.login(process.env.TOKEN_BOT)
