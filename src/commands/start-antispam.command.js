
async function start_antispam({ client, interaction }) {
  try {
    await interaction.reply(`Comenzando la inicialización`)
     console.log(client.channels.cache)
  } catch (error) {
     await interaction.reply(`
      Has been a error:
      ${error}
     `)
  }
}

module.exports = { start_antispam }