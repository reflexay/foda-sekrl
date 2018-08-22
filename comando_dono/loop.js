const Discord = require("discord.js");

module.exports.run = async (client) =>{


    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("")
    console.log("Loop no status do BOT ativo!");
    console.log(" ");

    for (i=0; i<10;){
        
        client.user.setPresence({ game: { name: `Proteção - MoreirawC`, url: "https://www.twitch.tv/viniciussz_", type: 1} });
        await sleep(60000)
        client.user.setPresence({ game: { name: "Proteção - Moreiraw", type: 0 } });
        await sleep(60000)
        client.user.setPresence({ game: { name: `AntiBOT - Moreiraw`, type: 3} });
        await sleep(60000)
        client.user.setPresence({ game: { name: `Você é um robo?`, url: "https://www.twitch.tv/viniciussz_", type: 2} });
        await sleep(60000)
        client.user.setPresence({ game: { name: `Complete a verificação!`, url: "https://www.twitch.tv/viniciussz_", type: 3} });
       
    }
   

}
