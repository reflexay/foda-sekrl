exports.run = (client, message, args) => {

    if  (!message.member.hasPermissions(["ADMINISTRADOR"])) return message.reply("Você não tem permissão para criar uma Parceria!");

    var coldown = new Set()
    let razaou = args.join(' ');

    if(!razaou.length < 1) {

        if(coldown.has(message.author.id)) return message.reply("**Você deve esperar 3 minutos pra dar outra mensagem de Parceria! :confused:**");;

        message.guild.channels.get("487704443262074911").sendMessage({
            "embed": {
                "description": `ㅤㅤㅤㅤㅤㅤㅤㅤ**🙏 Parceria 🙏**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\nㅤ**->** ${message.content.replace("!parceria ","")}`,
                "color": 55512,
                "thumbnail": {
                    "url": "https://cdn.discordapp.com/attachments/472180056416845824/486995453213147174/sidoka1.png"
                }
            }
        }).then(function(value) {
            setTimeout(function() {
                value.react("👍");
            }, 500)
            setTimeout(function() {
                value.react("🔥");
            }, 1000)
            setTimeout(function() {
                value.react("❤");
            }, 1500)
            setTimeout(function() {
                value.react("🤑");
            }, 2000)
        })

        message.reply("**Mensagem de Parceria inviada com sucesso! :smile:**");

        coldown.add(message.author.id)
        setTimeout(function() {
            coldown.delete(message.author.id)
        }, 3 * 1000 * 60)

    } else {
        message.reply("**Diga a mensagem da Parceria!**");
    }

}
