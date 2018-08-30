exports.run = (client, message, args) => {

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
