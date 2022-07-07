// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
class MarkDown {
  static generateReadMe(answers) {
    return `
  # ${answers.title}
    
  ## Table of Content
  - [Project description](#Description)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [installation](#Installation)
  - [Licenses](#License)
  - [Questions](#Questions)

  ## Description
  ${answers.description}

  ##Usage
  ${answers.usage}

  ## Installation
  ${answers.installation}

  ## Credits
  ${answers.credits}

  ## Questions
  ${answers.email}
  ${answers.git}

  ## License
  ${answers.license}
  `
  }
}

module.exports = MarkDown;
