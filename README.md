In the world of collaborative software development, effective communication through Git commit messages is key. However, maintaining consistency and clarity can be challenging, especially in large projects. That's where `@harshitkishor/git-commit` comes in -> a JavaScript package designed to streamline the process of creating meaningful and standardized Git commit messages.

#### Why Git Commit Messages Matter

Clear and well-structured commit messages are essential for understanding code changes, tracking project history, and facilitating collaboration among team members. Inconsistent or vague commit messages can lead to confusion and hinder the overall development process.

## How It Works:

#### 1. Installation:

To install @harshitkishor/git-commit as a development dependency, run the following command:

```javascript
yarn add -D @harshitkishor/git-commit
```

or

```javascript
npm i -D @harshitkishor/git-commit
```

This will create a script in package.json file and a configuration file `harshit.config.json` in the root of your project to customize the behavior of the @harshitkishor/git-commit package.

##### Creating Configuration File and Script Manually

**Note: ** If the installation process doesn't automatically create the configuration file and script, you can do it manually:

1. Create a script in package.json:

```json
"scripts": {
  "git:lint": "harshit"
  // Add other scripts as needed
}
```

2. Create the configuration file (harshit.config.json):

```bash
yarn git:lint init
```

This command initializes the configuration file, allowing you to customize the behavior of @harshitkishor/git-commit.

If the configuration file (harshit.config.json) is not automatically created during the initialization process, you can create it manually and include the provided settings. Here's the configuration based on the information you provided:

```json
{
  "typePrefix": "[",
  "typeSuffix": "]",
  "typeSeparator": ":",
  "titleLimit": 100,
  "titleFirstLetterCapital": true,
  "spaceBeforeTitle": true,
  "allowTicketID": true,
  "isTicketIDRequired": false,
  "ticketIDPrefix": "TICKET-",
  "ticketIDRegExp": "^\\d{1,5}$",
  "ticketOpenPrefix": "[",
  "ticketCloseSuffix": "]",
  "ticketSeparator": ":",
  "ticketIDBeforeType": true,
  "isEmojiEnable": true,
  "emojiAtEndOfCommit": true
}
```

#### 2. Usage:

Once you have created the harshit.config.json file, you can modify its contents based on your specific needs. Here's a guide on how to do that:

#### Modifying `harshit.config.json`

Open the `harshit.config.json` file and make adjustments according to your preferences. Here's a breakdown of the configuration parameters:

**typePrefix, typeSuffix, typeSeparator:** Define how the commit type is wrapped and separated. For example, with the provided configuration, a commit type like "FEAT" will be formatted as "[FEAT]:".

**titleLimit:** Set the maximum character limit for the commit title.

**titleFirstLetterCapital:** Specify whether the first letter of the commit title should be capitalized.

**spaceBeforeTitle:** Determine whether there should be a space before the commit title.

**allowTicketID, isTicketIDRequired:** Control the inclusion and requirement of a ticket ID in the commit message.

**ticketIDPrefix, ticketIDRegExp:** Define the prefix and regular expression for the ticket ID.

**ticketOpenPrefix, ticketCloseSuffix, ticketSeparator:** Specify how the ticket ID is wrapped and separated in the commit message.

**ticketIDBeforeType: ** Decide whether the ticket ID should appear before the commit type or after the commit type.

**isEmojiEnable, emojiAtEndOfCommit:** Enable or disable emojis in commit messages and specify whether they should be placed at the end or beginning.

Feel free to modify these parameters based on your team's conventions and your personal preferences. Once you've made the changes, save the file.

### Available Commands

##### 1. Initialize or Reset Configuration File:

```bash
yarn git:lint init
```

Use this command to initialize or reset the configuration file (harshit.config.json) for customizing the behavior of the linting tool.

##### 2. Add Files to Staging:

```bash
yarn git:lint add
```

This command is analogous to git add. It stages files for the upcoming commit.

##### 3. Help Command:

```bash
yarn git:lint -h
```

or

```bash
yarn git:lint --help
```

These commands provide help information, displaying all available commands and their usage.

##### 4. Commit Prompt:

```bash
yarn git:lint commit
```

This command prompts users with questions to generate commit messages according to the configured rules.

These commands collectively provide a comprehensive set of features for managing and standardizing Git commit messages in your project. Users can leverage these commands to streamline their workflow and maintain consistency in their version control practices.

Author - Harshit Kishor
Article - [Medium](https://medium.com/@harshitkishor2/streamlining-git-commit-messages-with-harshitkishor-git-commit-7a85a0abf02d "Medium")
