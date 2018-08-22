module.exports.run = async (client, message, args) => {

    if  (!message.member.hasPermissions(["BAN_MEMBERS"])) return message.reply("Erro: Você não tem permissão para BANIR!");
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
	let canal = client.channels.get("481955306339827742");
   
    if (message.mentions.users.size < 1) return message.reply('Erro: Mencione o usuário para banir').catch(console.error);
   
    if (reason.length < 1) return message.reply('Insira um motivo para eu poder banir!');
    
    if (!message.guild.member(user).bannable) return message.reply("Erro: Infelizmente eu não posso banir esse usuário,talvz ele tenha um cargo maior que o meu!");
    let member = message.guild.member(user).ban(0)
 
    const Discord = require("discord.js");
    var embed = new Discord.RichEmbed()
        .setTitle("Informações sobre o banimento!")
        .setColor('ff0000')
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
        .addField('Tipo De punição:', '***BAN***')
        .addField('👤Usuario Banido:', `${user.username}`)
        .addField('👮 Por:', `${message.author.username}`)
        .addField('📋 Motivo:', reason)
        .setFooter('Moreiraw - Punimentos', "https://cdn.discordapp.com/emojis/460264772869554176.gif")
	message.channel.send(`O usuário ${user}, foi banido por ${message.author.username}. Motivo: ${reason}`);
	canal.send(embed)
   
}
