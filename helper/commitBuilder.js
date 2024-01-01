const readConfigFile = require("./readConfigFile");
const config = readConfigFile();

function buildType(answers) {
  return answers?.commitType
    ? `${config.typePrefix}${answers.commitType}${config.typeSuffix}${config.typeSeparator}`
    : "";
}
function buildTitle(answers) {
  return answers?.title ? `${config.spaceBeforeTitle ? " " : ""}${answers.title}` : "";
}

function buildTicketIds(answers) {
  if (!answers?.ticketId) {
    return ""; // Return if there are no ticket IDs
  }
  const ids = answers?.ticketId.split(",");

  if (ids.length === 0) {
    return ""; // Return an empty string if there are no ticket IDs
  }
  const formattedIds = ids
    .map((ticketId) => (ticketId ? `${config.ticketIDPrefix}${ticketId}` : ""))
    .filter(Boolean)
    .join(",");
  return `${config.ticketOpenPrefix}${formattedIds}${config.ticketCloseSuffix}${config.ticketSeparator}`;
}

function buildEmoji(answers) {
  return answers?.emojiName
    ? `${config.emojiAtEndOfCommit ? " " : ""}${answers.emojiName}${
        !config.emojiAtEndOfCommit ? " " : ""
      }`
    : "";
}

function arrangeTicketAndType(answers) {
  const type = buildType(answers);
  const ticketIds = buildTicketIds(answers);
  return `${config.ticketIDBeforeType ? ticketIds + type : type + ticketIds}`;
}

function combileTitleWithTypeAndTicket(answers) {
  const title = buildTitle(answers);
  const typeAndTicket = arrangeTicketAndType(answers);
  return (typeAndTicket + title).toString();
}

function commitBuilder(answers) {
  const emoji = buildEmoji(answers);
  const msg = combileTitleWithTypeAndTicket(answers);
  const commitMessgae = `${!config.emojiAtEndOfCommit ? emoji : ""}${msg}${
    config.emojiAtEndOfCommit ? emoji : ""
  }`;
  return commitMessgae;
}

module.exports = commitBuilder;
