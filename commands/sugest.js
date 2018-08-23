exports.run = (client, message, args) => {

    var coldown = new Set()
    let razaou = args.join(' ');

    if(!razaou.length < 1) {

        if(coldown.has(message.author.id)) return message.reply("**Você deve esperar 3 minutos pra dar outra sugestão. :confused:**");;

        message.guild.channels.get("482222672382656536").sendMessage({
            "embed": {
                "description": `ㅤㅤㅤㅤㅤㅤㅤㅤ**🏆 NOVA SUGESTÃO 🏆**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Por:** <@${message.author.id}>\nㅤ\nㅤ**->** ${message.content.replace("?sugest ","")}`,
                "color": 55512,
                "thumbnail": {
                    "url": "https://cdn.discordapp.com/attachments/469238635523473408/472423646082629633/WOLFENSTEIN-LOGO-T-SHIRT-logo.jpg"
                }
            }
        }).then(function(value) {
            setTimeout(function() {
                value.react("👍");
            }, 500)
            setTimeout(function() {
                value.react("👎");
            }, 1000)
            setTimeout(function() {
                value.react("❤");
            }, 1500)
            setTimeout(function() {
                value.react("❌");
            }, 2000)
        })

        message.reply("**Sugestão enviada. :smile:**");

        coldown.add(message.author.id)
        setTimeout(function() {
            coldown.delete(message.author.id)
        }, 3 * 1000 * 60)

    } else {
        message.reply("**Diga sua sugestão**");
    }

}
