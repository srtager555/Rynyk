const { __slash_command__ping_latency__ } = require("./ping-latency.command");
const {
  __slash_command__start_antispam__,
} = require("./start-antispam.command");

// A simple function Hall
function __interaction__slash_commands__(interaction) {
  const { commandName } = interaction;

  const slashCommands = [
    __slash_command__ping_latency__,
    __slash_command__start_antispam__,
  ];

  // here the code'll filter the correct command
  const whichCommandIs = slashCommands.filter((el) => el.name === commandName);

  // run the function of this command
  whichCommandIs[0].functionToRun({ interaction });
}

module.exports = { __interaction__slash_commands__ };
