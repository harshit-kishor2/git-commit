const { exec } = require("child_process");
const inquirer = require("inquirer");
const colors = require("../helper");

const questions = [
  {
    type: "list",
    name: "addOption",
    message: "Choose files to add:",
    choices: ["All files", "Specific files"],
  },
];

function addStaging() {
  // Check if all files are already in the staging area
  exec("git diff --exit-code", (err) => {
    if (!err) {
      console.log(
        colors.green +
          "All files are already in the staging area. Everything is good!" +
          colors.reset
      );
      return;
    }

    inquirer.prompt(questions).then((answers) => {
      if (answers.addOption === "All files") {
        exec("git add .", (err, stdout, stderr) => {
          if (err) {
            console.error(`Error adding files: ${stderr}`);
          } else {
            console.log("Git add successful for all files.");
          }
        });
      } else if (answers.addOption === "Specific files") {
        exec("git status --short", (err, stdout, stderr) => {
          if (err) {
            console.error(`Error getting file status: ${stderr}`);
          } else {
            const files = stdout
              .trim()
              .split("\n")
              .map((line) => line.trim().substring(2));

            // Check which files are already staged
            exec("git diff --name-only --cached", (err, stdout, stderr) => {
              if (err) {
                console.error(`Error checking staged files: ${stderr}`);
              } else {
                const stagedFiles = new Set(stdout.trim().split("\n"));

                // Filter out files that are already staged
                const unstagedFiles = files.filter((file) => !stagedFiles.has(file));

                const specificFilesQuestion = [
                  {
                    type: "checkbox",
                    name: "files",
                    message: "Select files to add:",
                    choices: unstagedFiles,
                    validate: (value) =>
                      value.length > 0 ? true : "Please select at least one file.",
                  },
                ];

                inquirer.prompt(specificFilesQuestion).then((filesAnswer) => {
                  const filesToAdd = filesAnswer.files.join(" ");
                  exec(`git add ${filesToAdd}`, (err, stdout, stderr) => {
                    if (err) {
                      console.error(`Error adding files: ${stderr}`);
                    } else {
                      console.log(`Git add successful for specific files: ${filesToAdd}`);
                    }
                  });
                });
              }
            });
          }
        });
      } else {
        console.log("Operation canceled.");
      }
    });
  });
}

module.exports = addStaging;
