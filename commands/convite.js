const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{


   message.delete().catch(O_o=>{})
   const twitter = new Discord.RichEmbed()
       .setColor("0cff00")
       .setAuthor("Convite:")
       
       .setDescription("Divulgue nosso servidor discord com o seguinte convite: https://discord.gg/f3DxjA2 ! :smile:")
       
       .setTimestamp()
       .setFooter(`Moreiraw - BOT`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")
    
    message.channel.send(twitter)

}
