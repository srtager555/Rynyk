const { GlobalCommand } = require("../GlobalCommand");

const __slash_command__ping_latency__ = new GlobalCommand({
  name: "ping",
  functionToRun: __slash_command__ping_latency__function,
});

async function __slash_command__ping_latency__function(interaction) {
  let time = 0;
  let timer = setInterval(() => time++, 1);

  await interaction.guild.channels.fetch();

  clearInterval(timer);

  await interaction.reply(`${time}ms`);
}

module.exports = { __slash_command__ping_latency__ };
