async function start_antispam({ client, interaction }) {
  try {
    const data = client.guilds.cache;
    const channelManager = data.get(interaction.guildId).channels;

    const namesChannels = await channelManager
      .fetch()
      .then((channels) => channels.map((value) => value.name));

    const hasRynykLog = namesChannels.some((el) => el === "rynyk-logs");
    const hasRynykNews = namesChannels.some((el) => el === "rynyk-news");

    await interaction.reply(
      `rynyk-logs: ${hasRynykLog}, rynyk-news: ${hasRynykNews}`
    );
  } catch (error) {
    await interaction.reply(`
      Has been a error:
      ${error}
     `);
  }
}

module.exports = { start_antispam };
