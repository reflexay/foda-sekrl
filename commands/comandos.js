const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sender = message.author;
    let msg = message.content.toUpperCase();
    let icon = message.author.avatarURL
    let bicon = bot.user.avatarURL
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let bargs = messageArray.slice[1];
    message.delete();

    message.author.createDM().then(channel =>{

        let bembed = new Discord.RichEmbed()
      .setColor("GREEN")
          .setAuthor("Toxic BOT - Comandos", bicon)
          .setDescription("**Prefixo:** ?")
          .addField("Lista de todos os comandos:", `**!ping** - Ele demonstra o seu ping no servidor!
          \n**?twitter** - Envia o Twitter Oficial do Moreiraw!
          \n**?serverinfo** - Envia uma mensagem onde demonstra o status do servidor!
          \n**?convite** - Envia o link para a divulgação do servidor discord!
          \n**?comandos** - Envia uma mensagem como todos os meus comandos!
          \n**?avatar** - Envia o avatar do usuario mencionado!
          \nBom, estes são os meus comandos que você tem permissão para usufruir no servidor,qualquer bug ou sugestão contacte o Detestado#0164 no privado!
          `)
          .setFooter(`Moreiraw - BOT`, "https://cdn.discordapp.com/emojis/460264772869554176.gif");

         channel.send(bembed);
      return message.reply("Uma mensagem foi enviada em seu privado, verifique se tem a DM liberada!")
  })
}

module.exports.help = {
    name: "comandos"
}
