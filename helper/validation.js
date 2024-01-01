const readConfigFile = require("../helper/readConfigFile");

const config = readConfigFile();

function isValidRegExp(pattern) {
  try {
    new RegExp(pattern);
    return true;
  } catch (error) {
    return false;
  }
}

//! Validate commit title
function validateTitle(title) {
  // check length
  if (config.titleLimit && title.length > config.titleLimit) {
    return `Title length should not exceed ${config.titleLimit} characters.`;
  }

  // Check if the first letter is capital
  const words = title.split(/\s+/);
  const firstWord = words[0];
  if (!title) {
    return "Title is required.";
  }
  if (config?.titleFirstLetterCapital && !/^[A-Z]/.test(firstWord)) {
    return "Title should start with a capital letter.";
  }
  // Check if the title is in past tense
  if (/ed\b/i.test(title)) {
    return "Title should not be in past tense. ";
  }
  return true;
}

// ! Validate ticket id if any
function validateTicketId(ticketId) {
  // Check if ticketId is required but empty
  if (!ticketId) {
    return !config.isTicketIDRequired || "Ticket ID is required.";
  }
  if (config.ticketIDRegExp) {
    if (!isValidRegExp(config.ticketIDRegExp)) {
      return "Invalid regular expression: " + config.ticketIDRegExp;
    }
    const regexId = new RegExp(config.ticketIDRegExp);
    const ids = ticketId.split(",");
    const isValidFormat = ids.every((id) => !id || regexId.test(id));
    if (!isValidFormat) {
      return "Invalid ticket ID.";
    }
  }
  return true;
}

module.exports = {
  validateTitle,
  validateTicketId,
};
