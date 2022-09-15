const { __prototype_command_base__ } = require("../../deploy-commands");

const __button_test__ = new __prototype_command_base__({
  name: "button--test",
  functionToRun: button__test,
});

function button__test({ interaction }) {
  interaction.reply("SEEEEEXOOOOO");
}

module.exports = { __button_test__ };
