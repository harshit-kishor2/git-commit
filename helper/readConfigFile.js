const findConfig = require("find-config");
const loacalConfig = require("../configs/config.json");

const CONFIG_NAME = "harshit.config.json";

const buildConfig = (configFile) => {
  return {
    typePrefix: configFile?.typePrefix ?? "[",
    typeSuffix: configFile?.typeSuffix ?? "]",
    typeSeparator: configFile?.typeSeparator ?? ":",
    titleLimit: configFile?.titleLimit ?? 100,
    titleFirstLetterCapital: configFile?.titleFirstLetterCapital ?? true,
    spaceBeforeTitle: configFile?.spaceBeforeTitle ?? true,
    allowTicketID: configFile?.allowTicketID ?? true,
    isTicketIDRequired: configFile?.isTicketIDRequired ?? false,
    ticketIDPrefix: configFile?.ticketIDPrefix ?? "TICKET-",
    ticketIDRegExp: configFile?.ticketIDRegExp ?? "^\\d{1,5}$",
    ticketOpenPrefix: configFile?.ticketOpenPrefix ?? "[",
    ticketCloseSuffix: configFile?.ticketCloseSuffix ?? "]",
    ticketSeparator: configFile?.ticketSeparator ?? ":",
    ticketIDBeforeType: configFile?.ticketIDBeforeType ?? true,
    isEmojiEnable: configFile?.isEmojiEnable ?? true,
    emojiAtEndOfCommit: configFile?.emojiAtEndOfCommit ?? true,
  };
};

const readConfigFile = () => {
  var configFile = findConfig(CONFIG_NAME);
  if (configFile) {
    const loadConfig = require(configFile);
    const config = buildConfig(loadConfig);
    return config;
  } else {
    const config = buildConfig(loacalConfig);
    return config;
  }
};

module.exports = readConfigFile;
