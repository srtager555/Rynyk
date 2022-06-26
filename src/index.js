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
   console.log("XD");
   console.log("Ready!");
});

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
			.catch(error => console.error('One of the emojis failed to react:', error));
   }
});

client.on('messageCreate', async (message) => {

      console.log(message.content.length)
      let messageLength = message.content.length;
      message.channel.send(`el largo de este mensaje es:  ${messageLength.toString()}`).catch((error) => {
         console.log(message.content)
         console.log(error)
      })
})

// Login to Discord with your client's TOKEN
client.login(process.env.TOKEN);
