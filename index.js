const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

client.on("ready", () => {
  console.log("Ativado.");
   let gameloop = require('./comando_dono/loop.js'); // Ativaidae de status!!!!!!!!!!
    gameloop.run(client);
})
 

client.on("guildMemberAdd", member => {
  const embed = new Discord.RichEmbed()
  .setTitle("**Moreiraw-Boas Vindas**")
  .setColor("#4bf221")
  .setDescription("\n \nBem vindo ao MoreirawDiscord ! Siga-me no twitter: https://twitter.com/Moreiiraw 😄")

  .setTimestamp()
  .setFooter("Moreiraw - BOT")

member.send(embed)
});
 
client.on('guildMemberAdd', member => {
    var x = member.guild.channels.get("470223109387976724");
    if(!x) return;
    const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setThumbnail(member.user.avatarURL)
    .setFooter("Venha se divertir junto connosco !!")
    .setDescription(`${member.user.username} \n \n **Bem Vindo(a) ao Moreiraw Discord ! !**`)
    x.send(embed)
    let membro = member.guild.roles.find("name", "NÂO-REGISTRADO");
    member.addRole(membro)
        
});

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

  client.on('guildMemberRemove', member => {
    var x = member.guild.channels.get("470214019920429056");
    if(!x) return;
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setThumbnail(member.user.avatarURL)
    .setFooter("Esperamos que volte um dia !")
    .setDescription(`:unamused:   **SAIU** :unamused:   \n \n ${member.user.username} **Saiu do SERVIDOR !**`)
    x.send(embed)
  
  });

  client.on('message', message =>{
    if(message.content.includes("https://discord.gg/")){
        message.delete()
      message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
    }
  })

  client.on('message', message =>{
    if(message.content.includes("https://discord.me/")){
        message.delete()
      message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
    }
  })

client.on('message', message =>{
  if(message.content == '<@481644004342235136>'){
    const embed = new Discord.RichEmbed()
    .setTitle("**MoreirawBOT**")
    .setColor("#4bf221")
    .setDescription("\n \n Olá, sou o bot oficial do Moreiraw Discord, caso tenha algum bug ou sugestão contacte o Detestado#0164.")

    .setTimestamp()
    .setFooter("Moreiraw - BOT")

    message.channel.send(embed);
  }
});

client.on('message', message =>{
  if(message.content == '<@469099849250504705>'){
    const embed = new Discord.RichEmbed()
    .setTitle("**Chamou o detestado ?**")
    .setColor("#4bf221")
    .setDescription("\n \n Bom, ele esta AFK, lhe chame no privado para quando ele voltar responder você! E NÃO MARQUE ELE NOVAMENTE!")

    .setTimestamp()
    .setFooter("Secretaria - Detestado")

    message.channel.send(embed);
  }
});

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
