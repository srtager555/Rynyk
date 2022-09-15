const { __main_function_hall__ } = require("../Hall.function");

const { __slash_command__ping_latency__ } = require("./ping-latency.command");
const {
  __slash_command__start_antispam__,
} = require("./start-antispam.command");

// A simple function to run the function hall with the commands
function __interaction__slash_commands__(interaction) {
  const slashCommands = [
    __slash_command__ping_latency__,
    __slash_command__start_antispam__,
  ];

  __main_function_hall__({ interaction, arrCommands: slashCommands });
}

module.exports = { __interaction__slash_commands__ };
