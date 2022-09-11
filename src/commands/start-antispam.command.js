async function start_antispam({ client, interaction }) {
  try {
    let channelList;
    const data = client.guilds.cache;
    const channelManager = data.get(interaction.guildId).channels;

    await channelManager.fetch().then(
      (channels) =>
        (channelList = channels.map((value, key) => {
          return `channel: ${value.name}, id: ${key}`;
        }))
    );

    let channelListReduce = channelList.slice(0, 11);

    await interaction.reply(`Comenzando la inicialización:
= mostrando lista de canales:
${channelListReduce.join("\n")} \n ...`);
  } catch (error) {
    await interaction.reply(`
      Has been a error:
      ${error}
     `);
  }
}

module.exports = { start_antispam };
