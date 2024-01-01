const commitTypes = require("../configs/type.json");
const emoji = require("../configs/emoji.json");
const { validateTitle, validateTicketId } = require("./validation");
const readConfigFile = require("./readConfigFile");
const commitBuilder = require("./commitBuilder");
const colors = require("./index");
const emojiList = emoji.map((item) => {
  return {
    value: item.emoji,
    name: `${item.emoji}:`.padEnd(15) + `${item.description}`,
  };
});
const config = readConfigFile();

const questions = [
  {
    type: "search-list",
    name: "commitType",
    message: "Select the type of change that you're committing:",
    choices: commitTypes,
    loop: false,
  },
  {
    type: "input",
    name: "title",
    message: `Enter your title (${
      config.titleFirstLetterCapital ? "should start with a capital letter, " : ""
    }length is ${config.titleLimit}, and not in past tense):\n`,
    validate: validateTitle,
    // capitalize first letter (for value)
    filter: (val) => {
      const trimVal = val.trim();
      return config.titleFirstLetterCapital
        ? trimVal.charAt(0).toUpperCase() + trimVal.slice(1)
        : trimVal;
    },
    // capitalize first letter (for terminal)
    transformer: (val) => {
      const trimVal = val.trim();
      return config.titleFirstLetterCapital
        ? trimVal.charAt(0).toUpperCase() + trimVal.slice(1)
        : trimVal;
    },
  },
  {
    type: "input",
    name: "ticketId",
    message: `Enter your ticket ID, with comma separation for multiple entries.if any${
      config.isTicketIDRequired ? "" : " (optional)"
    }: \n`,
    validate: validateTicketId,
    when() {
      return !!config.allowTicketID; // no ticket ids allowed unless specifed
    },
  },
  {
    type: "search-list",
    name: "emojiName",
    message: "Choose emoji: ",
    choices: emojiList,
    default: "✨",
    transformer: (val) => {
      const trimVal = val.trim();
      return config.titleFirstLetterCapital
        ? trimVal.charAt(0).toUpperCase() + trimVal.slice(1)
        : trimVal;
    },
    when() {
      return !!config.isEmojiEnable;
    },
  },
  {
    type: "confirm",
    name: "confirmation",
    message: "Are you sure you want to proceed with the commit above?",
    default: true,
    when: (answers) => {
      const commitMessage = commitBuilder(answers);
      console.log(colors.green + "Your Commit Message is: " + colors.reset);
      console.log(colors.magenta + commitMessage + colors.reset);
      return !!commitMessage;
    },
  },
];

module.exports = questions;
