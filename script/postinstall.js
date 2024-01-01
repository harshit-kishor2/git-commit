const fs = require("fs");
const path = require("path");
const configContent = require("../configs/config.json");

function createDefaultConfig() {
  // Create configuration file
  const installPath = process.env.INIT_CWD;
  const configPath = path.resolve(installPath, "harshit.config.json");
  const jsonString = JSON.stringify(configContent, null, 2);
  fs.writeFileSync(configPath, jsonString, "utf-8");

  // Create script in package.json
  const packageJsonPath = path.resolve(installPath, "package.json");
  const packageJson = require(packageJsonPath);
  if (!packageJson.scripts) {
    packageJson.scripts = {};
  }
  packageJson.scripts["git:lint"] = "harshit";
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf-8");
}

createDefaultConfig();
