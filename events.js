const { Client, Message } = require("discord.js");
const { player, host1 } = require(".");

/**
 *
 * @param {Client} client
 * @param {Message} message
 */

module.exports = async (client) => {
    console.log(`Events Loaded`);
  // track start
  player.on("trackStart", async (queue, track) => {
    queue.metadata.channel.send(`🎵 Playing \`${track.title}\``);
  });

  // song added
  player.on("trackAdd", async (queue, track) => {
    queue.metadata.channel.send(`🎵 Added to Queue \`${track.title}\``);


  });
};

player.on("botDisconnect", (queue) => {
  queue.metadata.channel.send("❌ | I was manually disconnected from the voice channel, clearing queue!");
});

player.on("channelEmpty", (queue) => {
  queue.metadata.channel.send("❌ | Nobody is in the voice channel, leaving...");
});


player.on("queueEnd", (queue) => {
  queue.metadata.channel.send("✅ | Queue finished!");
});


// some olde code imported from the music bot makes the bot have a status and react to certain things that happen withinn discord to be later parsed down to the rest of the code

