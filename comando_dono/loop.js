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
        
        client.user.setPresence({ game: { name: `https://twitter.com/Moreiiraw`, url: "https://www.twitch.tv/viniciussz_", type: 1} });
        await sleep(60000)
        client.user.setPresence({ game: { name: "@Moreiiraw", type: 0 } });
        await sleep(60000)
        client.user.setPresence({ game: { name: `Gostou do servidor?`, type: 3} });
        await sleep(60000)
        client.user.setPresence({ game: { name: `@Moreiiraw`, url: "https://www.twitch.tv/viniciussz_", type: 2} });
        await sleep(60000)
        client.user.setPresence({ game: { name: `https://twitter.com/Moreiiraw`, url: "https://www.twitch.tv/viniciussz_", type: 3} });
       
    }
   

}
