/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const configContent = require("../configs/config.json");

function createDefaultConfig() {
  const configPath = path.resolve(process.cwd(), "harshit.config.json");
  const jsonString = JSON.stringify(configContent, null, 2);
  fs.writeFileSync(configPath, jsonString, "utf-8");
}

module.exports = createDefaultConfig;
