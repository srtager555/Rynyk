const { Prototype__command_base__ } = require("../Command--base.prototype");

const __button_test__ = new Prototype__command_base__({
  name: "button--test",
  functionToRun: button__test,
});

function button__test({ interaction }) {
  interaction.reply("SEEEEEXOOOOO");
}

module.exports = { __button_test__ };
