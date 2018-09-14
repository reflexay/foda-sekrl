const Discord = require('discord.js');
module.exports.run = async (client) =>{

    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("")
    console.log("O loop ativado!")

    for (i=0; i<10;){
        await sleep(600000)

    const mensagem1 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Aviso","https://cdn.discordapp.com/emojis/487770512492068884.gif")

            .setDescription("Visite o twitter do dono do nosso servidor Discord! [Clique Aqui](https://twitter.com/Moreiiraw) :smiley:")
           
            .setTimestamp()
            .setFooter(`Mensagens Automaticas - Moreiiraw`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")

    client.channels.get("489556941295583244").send(mensagem1);
    

    await sleep(600000)

    const mensagem2 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Aviso","https://cdn.discordapp.com/emojis/487770512492068884.gif")

            .setDescription("Olá, siga  o owner do discord no twitter para fica informado em sorteios / eventos que ocorrerá aqui em nosso servidor discord: https://twitter.com/Moreiiraw")
           
            .setTimestamp()
            .setFooter(`Mensagens Automaticas - Moreiiraw`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")

    client.channels.get("489556941295583244").send(mensagem2);

    await sleep(600000)

    const mensagem3 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Aviso","https://cdn.discordapp.com/emojis/487770512492068884.gif")

            .setDescription("Olá, siga  o owner do discord no twitter para fica informado em sorteios / eventos que ocorrerá aqui em nosso servidor discord: https://twitter.com/Moreiiraw :smiley:")
           
            .setTimestamp()
            .setFooter(`Mensagens Automaticas - Moreiiraw`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")

    client.channels.get("489556941295583244").send(mensagem3);

    await sleep(600000)

    const mensagem4 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Aviso","https://cdn.discordapp.com/emojis/487770512492068884.gif")

            .setDescription("Visite o twitter do dono do nosso servidor Discord!\n[Clique Aqui](https://twitter.com/Moreiiraw)\n\n :smiley:")
            .setTimestamp()
            .setFooter(`Mensagens Automaticas - Moreiiraw`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")

    client.channels.get("489556941295583244").send(mensagem4);
    
    await sleep(600000)

    const mensagem5 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Aviso","https://cdn.discordapp.com/emojis/487770512492068884.gif")

            .setDescription("Visite o twitter do dono do nosso servidor Discord! [Clique Aqui](https://twitter.com/Moreiiraw) :smiley:")
           
            .setTimestamp()
            .setFooter(`Mensagens Automaticas - Moreiiraw`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")

    client.channels.get("489556941295583244").send(mensagem5);
    
    
    }
}
