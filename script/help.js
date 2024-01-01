const colors = require("../helper");

function help(type) {
  const msg = type === "info" ? "Supported Commands : " : "Available Commands : ";
  console.log(colors.magenta, msg, colors.reset);
  console.log("  -h, --help     Show help message");
  console.log("  add            Add operation");
  console.log("  commit         Commit operation");
  console.log("  init           Initialize setup");
}

module.exports = help;
