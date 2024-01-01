const { exec } = require("child_process");
const inquirer = require("inquirer");
const searchList = require("inquirer-search-list");
inquirer.registerPrompt("search-list", searchList);

const questions = require("../helper/questions");
const commitMessageBuilder = require("../helper/commitBuilder");

function commit() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const commitMessage = commitMessageBuilder(answers);
      if (answers.confirmation) {
        exec(`git commit -m "${commitMessage}"`, (err, stdout, stderr) => {
          if (err) {
            console.error("Error committing changes:\n");
            // console.error(err);
            // console.error(stderr);
            console.error(stdout);
          } else {
            console.log(`Git commit successful: ${commitMessage}`);
          }
        });
      } else {
        console.log("Operation canceled.");
      }
    })
    .catch((err) => console.log("Error", err));
}

module.exports = commit;
