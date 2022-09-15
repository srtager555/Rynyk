const { __main_function_hall__ } = require("../Hall.function");

const { __button_test__ } = require("./button-test.command");

function __interaction__command_button__(interaction) {
  const buttonCommand = [__button_test__];

  __main_function_hall__({ interaction, arrCommands: buttonCommand });
}

module.exports = { __interaction__command_button__ };
