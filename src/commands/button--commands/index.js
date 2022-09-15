const { __main_function_hall__ } = require("../Hall.function");

function __interaction__command_button__(interaction) {
  const buttonCommand = [];

  __main_function_hall__({ interaction, buttonCommand });
}

module.exports = { __interaction__command_button__ };
