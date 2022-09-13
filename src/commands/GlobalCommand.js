function GlobalCommand({ name = "", functionToRun = Function }) {
  this.name = name;
  this.functionToRun = functionToRun;
}

module.exports = { GlobalCommand };
