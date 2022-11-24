 const {mcloginname,host1,version1,token1,discordchannel, prefix, channellogs} = require(`./mcmodules.json`);
const { Client, Message } = require("discord.js");
const https = require('https')
const client = new Client({
    restTimeOffset: 0,
    shards: "auto",
    intents: 641,
  });
  const { MessageAttachment, EmbedBuilder } = require('discord.js');

  botlogs = client.channels.cache.get(channellogs)
 
  const {dependencies,} = require(`./package.json`);
const { bot } = require(".");
 
module.exports = async (message, cmd, args, player, client, mcloginname,host1,version1,token1,discordchannel, prefix,bot) => {

    const username = bot.player

    if (cmd === `playerlist`) {

      const other1 = new EmbedBuilder() 
      .setDescription (` the server has ${Object.keys(bot.players).length} players online [${host1}]`)    
      .addFields(
      { name: 'Players curently', value: `Online: ${Object.keys(bot.players).join(' ,').slice(0, 1000)}` }
      )
      .setTimestamp()
     

        message.channel.send({ embeds: [other1] });
     }

     if (cmd === `pushlog`) {
const pushlogs = new EmbedBuilder()
.setTitle(`botlogs variable is functioning`)
.setDescription(`Yata bot is curently still in development and if u see this message it means a variable is alive`)

client.channels.cache.get(`${channellogs}`).send({ embeds: [pushlogs]});

const answer = new EmbedBuilder()
.setTitle(`logs pushed to the variable`)

message.channel.send({ embeds: [answer]});



     }

     if (cmd == `help`) {

   const helpcmd = new EmbedBuilder()
    .setTitle(`yata bot 4.0`)
    .setDescription(`welcome to yata bot 4.0 this is a new iteration of yata bot this is curently still in development and developed in private`)

    message.channel.send({ embeds: [helpcmd]});
     }

      if (cmd === `spacemacs`) {

          const spacemacs = new EmbedBuilder()
                .setDescription(`spacemacs is the best tool for now to code in and it has so many tools to make ur experience as pleasant as u want it to be  `)


          message.channel.send({embeds: [spacemacs]});
      }

      if (cmd === `commands`) {

          const commands = new EmbedBuilder()
                .setTitle(`commands`)
                .setDescription(`available commands are ${prefix}help,${prefix}info,${prefix}position,${prefix}pushlog,${prefix}playerlist, `)


          message.channel.send({embeds: [commands]});

      }


     if (cmd === `hello`) {

const shit = new EmbedBuilder()
.setTitle(`discord.js v 14 is ass`)

      message.channel.send({ embeds: [shit]});
      message.channel.send(`hello world i know that ${host1} has around ${Object.keys(bot.players).length} players online and the server brand is ${bot.game.serverBrand}`)
     }


     
      


     if (cmd === `info`) {

const information = new EmbedBuilder()
.setTitle(`info`)
.setDescription(`yata bot 4.0 is a newer iteration and newer generation minecraft bot wich is coded with modules instead of just 1 single plane file wich makes navigating trough the bot much easier`)

      message.content.send({ embeds: [info]});
     }
  
    
  
  bot.on("chat", (username, message) => {
    if (username === bot.username) return
    if (message === `${prefix}help`) {
     bot.chat(`welcome to yata bot 4.0 this is a new iteration of yata bot this is curently still in development and developed in private`)
          
         }
        })

        bot.on("chat", (username, message) => {
          if (username === bot.username) return
          if (message === `${prefix}locate`) {
        bot.whisper(username, (bot.entity.position))
                }
              })

              bot.on("chat", (username, message) => {
                if (username === bot.username) return
                if (message === `${prefix}brand`) {
              bot.whisper(username, (bot.game.serverBrand))
                      }
                    })

                    if (cmd === `brand`) {

                 const brandserver = new EmbedBuilder()

                 .setTitle(`serverbrand of ${host1}`)
                 .setDescription(`${bot.game.serverBrand}`)
              
                 message.channel.send({ embeds : [brandserver]});

                    }

                    if (cmd === `version`) {

         const mcversion = new EmbedBuilder()

         .setTitle(`version`)
         .setDescription(`${version1}`)

         message.channel.send({ embeds : [mcversion]});

                    }


              if (cmd === `height`) {

const heightbot = new EmbedBuilder()

.setTitle(`ingame height of minecraft bot`)
.setDescription(`${bot.game.height} blocks`)

message.channel.send({embeds : [heightbot]});


              }

              if (cmd === `position`) {
const botpositioning = new EmbedBuilder()
.setTitle(`bot location is at`)
.setDescription(`${bot.entity.position}`)

message.channel.send({ embeds: [botpositioning]});

              }

              if (cmd === `botversion`) {
const botversion = new EmbedBuilder()
.setTitle(`bot runs on`)
.setDescription(`bot version is yatabot 4.0 the newer iteration of the yatabot this time separated code with modules`)

message.channel.send({embeds : [botversion]});

            }

      if (cmd === `spacemacsisawesome`) {
          message.channel.send(`yes`)

      }

if ( cmd == "information") {

    const information = new EmbedBuilder()
          .setAuthor(`${host1}`)
          .setDescription(`yata bot is based uppon the nodejs framework`)

    message.channel.send({embeds : [information]});

}
 if ( cmd == "space") {

     const spacemacs = new EmbedBuilder()
           .setDescription(`this bot has been build in spacemacs`)

     message.channel.send({embeds : [spacemacs]});

 }

 if ( cmd == "kill") {
     const ingamekill = new EmbedBuilder()
           .setDescription(`ingame bot killed itself at ${bot.entity.position}`)
           .setFooter(`${host1}`)
     bot.chat(`/kill`)
     message.channel.send({embeds : [ingamekill]});

 }

