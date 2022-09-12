async function start_antispam({ interaction }) {
  try {
    const channelManager = interaction.guild.channels;

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
