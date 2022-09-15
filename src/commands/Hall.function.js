/**
 * @param  {Object} interaction - The Base interaction
 * @param  {Array} arrCommands - The array with the commands
 * @return Run the correct command
 */

// A prototype of function hall.
function __main_function_hall__({ interaction, arrCommands }) {
  let whichCommandIs;

  // here the code'll filter the correct command
  if (interaction.isButton())
    whichCommandIs = arrCommands.filter(
      (el) => el.name === interaction.customId
    );
  else
    whichCommandIs = arrCommands.filter(
      (el) => el.name === interaction.commandName
    );

  // run the function of this command
  whichCommandIs[0].functionToRun({ interaction });
}

module.exports = { __main_function_hall__ };
