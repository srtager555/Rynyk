require("dotenv").config();
// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");

// Create a new client instance
const client = new Client({
   intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
   ],
});

// When the client is ready, run this code (only once)
client.once("ready", () => {
   console.log("Ready!");
});

//Simple slash commands
client.on("interactionCreate", async (interaction) => {
   if (!interaction.isCommand()) return;

   const { commandName } = interaction;

   if (commandName === "worktime") {
      await interaction.reply("Time to work!");
   }

   if (commandName === "reaction") {
      const message = await interaction.reply({
         content: "Tengo la capacidad para reaccionar al chat",
         fetchReply: true,
      });
      message
         .react("👁️")
         .then(() => message.react("<:avueno:981575496578007101>"))
         .catch((error) =>
            console.error("One of the emojis failed to react:", error)
         );
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

   // message
   //    .react("👁️")
   //    .then(() => setTimeout(() => message.reactions.removeAll(), 3000));

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
