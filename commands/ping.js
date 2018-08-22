exports.run = (client, message, args) => {

    message.channel.send({
            "embed": {
              "description": "ㅤㅤㅤ:snowflake: **PING:** :snowflake:ㅤㅤ\n\n📡" + (Date.now() - message.createdTimestamp) + "ms",
              "color": 55512,
              "thumbnail": {
                "url": "https://cdn.discordapp.com/attachments/472180056416845824/481958603461230592/M.png"
              }
            }
          });
}
