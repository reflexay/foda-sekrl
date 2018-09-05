exports.run = (client, message, args) => {

 if(message.channel.id != "484422774249619457") return message.reply(`Você não pode executar comandos aqui, vá em <#484422774249619457> e execute o seu comando!`)
   message.delete().catch(O_o=>{})

    message.channel.send({
            "embed": {
              "description": "ㅤㅤㅤ:snowflake: **PING:** :snowflake:ㅤㅤ\n\n📡" + (Date.now() - message.createdTimestamp) + "ms",
              "color": 55512,
              "thumbnail": {
                "url": "https://cdn.discordapp.com/attachments/469107428512759813/484704598427435028/ping.jpeg"
              }
            }
          });
}
