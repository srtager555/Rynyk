/* eslint-disable no-console */
require("dotenv").config();
// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
const {
  __interaction__slash_commands__,
} = require("./commands/slash--commands");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  // eslint-disable-next-line no-console
  console.log("Ready!");
});

//Simple slash commands
client.on("interactionCreate", async (interaction) => {
  if (interaction.isChatInputCommand()) {
    __interaction__slash_commands__(interaction);
  }
});

// system on spam control (beta)

client.on("messageCreate", (message) => {
  const testChannel = "983907949342752818";

  if (
    message.author.bot ||
    message.author.id === "980742967365074974" ||
    message.author.id === "985599021693427832"
    // || message.channelId != testChannel
  ) {
    return;
  }

  let messageLength = message.content.length;

  client.channels.fetch(testChannel).then((channel) =>
    channel
      .send(
        `
            Author: ${message.author}
            channel: #${message.channel.name}
            message content: ${message.content}
            message length: ${messageLength.toString()}
            The message has ${message.content
              .split(/\s/)
              .length.toString()} words
            ${message.createdAt.toString()}
         `
      )
      .catch((error) => {
        console.error(message.content);
        console.error(error);
      })
  );
});

// Login to Discord with your client's TOKEN
client.login(process.env.TOKEN);
