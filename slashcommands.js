const {mcloginname,host1,version1,token1,discordchannel, prefix1 } = require(`./mcmodules.json`);
const { Client, Message } = require("discord.js");
const { SlashCommandBuilder,Routes } = require('discord.js');




const client = new Client({
    restTimeOffset: 0,
    shards: "auto",
    intents: 641,
  });
  const { MessageAttachment, EmbedBuilder,ApplicationCommandType, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder } = require('discord.js');

 
  const {dependencies,} = require(`./package.json`);
const { bot } = require(".");
 
  module.exports = async (message, cmd, args, player, client, mcloginname,host1,version1,token1,discordchannel, prefix,bot) => {
    const data = new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get info about a user or a server!')
    .addSubcommand(subcommand =>
      subcommand
        .setName('user')
        .setDescription('Info about a user')
        .addUserOption(option => option.setName('target').setDescription('The user')))
    .addSubcommand(subcommand =>
      subcommand
        .setName('server')
        .setDescription('Info about the server'));
  if (cmd === `slashcommand`) {

    const hellowold = new EmbedBuilder()

    .setTitle(`slash commands soon available`)
    .setDescription(`stop asking about slash commands u dumb fuck`)

    message.channel.send({ embeds: [hellowold]});
  }
  if (cmd === `please`) {

    const please = new EmbedBuilder()
    .setTitle(`stop asking`)

    message.channel.send({ embeds: [please]});

  }


  if (cmd === `security`) {

    const joe = new EmbedBuilder()
    .setTitle(`Joe Biden aproved bot`)
   .setDescription(`Dr Joe aproves`)
   message.channel.send({ embeds : [joe]});

  }

      if (cmd === `slashcommands`) {

          message.channel.send(`discord api is ass`)
      }

  }












 
