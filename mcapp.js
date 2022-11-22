const {mcloginname,host1,version1,token1,discordchannel, prefix,channellogs } = require(`./mcmodules.json`);
const { Client, Message } = require("discord.js");
const https = require('https')
const client = new Client({
    restTimeOffset: 0,
    shards: "auto",
    intents: 641,
  });
  const { MessageAttachment, EmbedBuilder } = require('discord.js');

 
  const {dependencies,} = require(`./package.json`);
const { bot } = require(".");
 
module.exports = async (message, cmd, args, player, client, mcloginname,host1,version1,token1,discordchannel, prefix,bot) => {

  const username = bot.player


if (cmd === `learn`) {

const learnrighnow = new EmbedBuilder()

.setTitle(`learn`)
.setDescription(`you need to learn javascript right fucking now at https://www.salt.study/our-hubs/amsterdam`)

message.channel.send({embeds : [learnrighnow]});

}


}

bot.on("chat" , (username, message) => {

    if (username === bot.username) return
    if (message === `${prefix}spacemacs`) {

        bot.whisper(username (`this bot has been coded uppon spacemacs `))
    }
})


bot.on("chat", (username, message) => {
  if (username === bot.username) return 
  if (message === `${prefix}info`) {
bot.whisper(username, (`this bot is made for the people that apreciate the anarchy community`))
        }
})

      
      botlogs = client.channels.cache.get(channellogs)
bot.on("chat", (username, message) => {
  if (username === bot.username) return
  if (message === `${prefix}location`) {
bot.whisper(username, (bot.entity.position))
console.log(`${username} requested location data from within the game sesion`)
botlogs.send(`${username} requested location data from within the game sesion`)
        }
      })


      bot.on('playerJoined', (username,message) => {
          if (username !== bot.username) {
            client.channels.cache.get(channellogs).send(`${username} has joined ${host1}`)
            console.log(`${username} has joined ${host1}`)
          }
        })

        bot.on('playerLeft', (username,message) => {
          if (username === bot.username) return
    client.channels.cache.get(channellogs).send(`${username} has left ${host1}`)
    console.log(`${username} has left ${host1}`)
        })

bot.on("chat", (username, message) => {
  if (username === bot.username) return
  if (message === `${prefix}info`) {
bot.whisper(username, (`hi there`))
        }
      })

      bot.on('whisper', (username, message, rawMessage) => {
          console.log(`I received a message from ${username}: ${message}`)
          bot.whisper(username, 'thanks for ur information')
          
      })



