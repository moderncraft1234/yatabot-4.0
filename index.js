const { EmbedBuilder } = require('@discordjs/builders');
const { chat } = require('googleapis/build/src/apis/chat');

const { error } = require('winston');
const {mcloginname,host1,version1,token1,discordchannel, prefix, botid, } = require(`./mcmodules.json`);
const Discord = require(`discord.js`);
const { Client, GatewayIntentBits, SlashCommandBuilder, ApplicationCommandType, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
	],
});
const mineflayerViewer = require('prismarine-viewer').mineflayer

const { Player, Queue } = require("discord-player");

const { AudioFilters } = require("discord-player");



mineflayer = require('mineflayer')

let bot = mineflayer.createBot({
    version: version1,
    host: `${host1}`,
    auth: `microsoft`,
    username: `${mcloginname}`
})


const username = bot.player


bot.on("chat", (username, message) => {
    console.log(`${username}> ${message}`)
      })




      bot.on("chat", (username, message) => {
        if (username === bot.username) return
        if (message === `${prefix}help`) {
            bot.whisper(username, (`updated version of yata-bot 3.0 only parsing trough mineflayer api`))
              }
            })

            bot.once('spawn', () => {
              mineflayerViewer(bot, { port: 3009, firstPerson: false })
              console.log(`minecraft username is ${bot.entity.username}`)
              var delayInMilliseconds = 30000;
            })
       
   
            



//module export variable for all the different modules that contain script
            const player = new Player(client, {
              leaveOnEnd: true,
              leaveOnStop: true,
              leaveOnEmpty: true,
              leaveOnEmptyCooldown: 5000,
              autoSelfDeaf: true,
              initialVolume: 50,
              bufferingTimeout: 3000,
            });
            module.exports = { player, client, mcloginname,host1,version1,token1,discordchannel, prefix,bot  };
            client.on("ready", () => {
              console.log(`yata bot conected to discord`);
              client.user.setActivity("yata-bot-4.0-dev", { type: "LISTENING" });
            });
            require('./events')(client)
            client.on("messageCreate", async (message) => {
              if (!message.guild || message.author.bot) return;
              if (!message.content.startsWith(prefix)) return;
            
              let args = message.content.slice(prefix.length).trim().split(" ");
              let cmd = args.shift()?.toLowerCase();

      
            //exporting the exect variables for the listed modules
              require("./commands")( message, cmd, args, player, client, mcloginname,host1,version1,token1,discordchannel, prefix,bot);
              require("./slashcommands")( message, cmd, args, player, client, mcloginname,host1,version1,token1,discordchannel, prefix,bot);
              require("./mcapp")( message, cmd, args, player, client, mcloginname,host1,version1,token1,discordchannel, prefix,bot);
            });
          



            client.on('ready', () => {
              console.log(`The discord bot logged in! Username: ${client.user.username}!`)
              // Find the Discord channel messages will be sent to
              channel = client.channels.cache.get(discordchannel)
              if (!channel) {
                console.log(`I could not find the channel (${process.argv[3]})!\nUsage : node discord.js <discord bot token> <channel id> <host> <port> [<name>] [<password>]`)
                process.exit(1)
              }
            })
            
            // Redirect Discord messages to in-game chat
            client.on('messageCreate', message => {
              // Only handle messages in specified channel
              if (message.channel.id !== channel.id) return
              // Ignore messages from the bot itself
              if (message.author.id === client.user.id) return

              if (username === bot.entity.username) return
            
              bot.chat(`${message.author.tag}: ${message.content}`)
            })
            
            // Redirect in-game messages to Discord channel
            bot.on('chat', (username, message) => {
              // Ignore messages from the bot itself
              if (username === bot.username) return

//embedd for minecraft chat pass trough
    const messageformc = new EmbedBuilder()
    
    .setTitle(host1)
    .setDescription(`<${username}> : ${message}`)
           
              channel.send({embeds: [messageformc]});
            })



client.login(token1)
