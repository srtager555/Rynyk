require("dotenv").config();
// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");

const { start_antispam } = require("./commands/start-antispam.command");
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

//Simple slash commands
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "worktime") {
    await interaction.reply("Time to work!");
  }

  if (commandName === "ping") {
    let time = 0;
    let timer = setInterval(() => time++, 1);

    await interaction.guild.channels.fetch();

    clearInterval(timer);

    await interaction.reply(`${time}ms`);
  }

  if (commandName === "start-antispam")
    try {
      await start_antispam({ client, interaction });
    } catch (error) {
      await interaction.reply(`error: ${error}`);
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
