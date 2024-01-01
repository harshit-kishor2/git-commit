const BGred = "\x1b[41m";
const reset = "\x1b[0m";
const green = "\x1b[32m";
const magenta = "\x1b[35m";

const Commands = {
  ADD: "add",
  COMMIT: "commit",
  INIT: "init",
  HELP: "--help",
  H: "-h",
};

const colors = {
  BGred,
  reset,
  green,
  magenta,
  Commands,
};
module.exports = colors;
