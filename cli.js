#!/usr/bin/env node
const setup = require("./script/setup");
const add = require("./script/add");
const commit = require("./script/commit");
const help = require("./script/help");
const { Commands } = require("./helper");

const colors = require("./helper");

// Run the prompt if the script is executed directly
if (require.main === module) {
  const [command, args] = process.argv.slice(2);
  switch (command) {
    case Commands.ADD:
      add();
      break;
    case Commands.COMMIT:
      commit();
      break;
    case Commands.INIT:
      setup();
      break;
    case Commands.H:
    case Commands.HELP:
      help("info");
      break;
    default:
      console.error(colors.BGred + "Invalid command." + colors.reset);
      help();
  }
}
