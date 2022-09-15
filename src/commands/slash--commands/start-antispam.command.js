const { __prototype_command_base__ } = require("../Command--base.prototype");

const __slash_command__start_antispam__ = new __prototype_command_base__({
  name: "start-antispam",
  functionToRun: start_antispam,
});

async function start_antispam({ interaction }) {
  try {
    const channelManager = interaction.guild.channels;

    const namesChannels = await channelManager
      .fetch()
      .then((channels) => channels.map((value) => value.name));

    const hasRynykLog = namesChannels.some((el) => el === "rynyk-logs");
    const hasRynykNews = namesChannels.some((el) => el === "rynyk-news");

    if (!hasRynykNews || !hasRynykNews) {
      await interaction.reply({
        content: "WARNING",
        components: [
          {
            type: 1,
            components: [
              {
                type: 2,
                label: "Click me!",
                style: 1,
                custom_id: "button--test",
              },
            ],
          },
        ],
      });
      return;
    }
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

module.exports = { __slash_command__start_antispam__ };
