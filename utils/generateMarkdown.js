// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.desc}

  ## Table of Contents

  - [Preview](#preview)

  - [Installation](#installation)

  - [Usage](#usage)

  - [Credits](#Credits)

  - [License](#License)

  - [Contact Me](#Contact Me)
  
  ## Preview
  
  link to an image
  
  ![screenshot of website/application](${data.picture})
  
  ## Installation
  
  ${data.installInstructions}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.contribute}
  
  ## License
  
  some silly little license badge
  
  ## Contact Me
  
  ${data.gitUser}
  ${data.email}

`;
}

module.exports = generateMarkdown;
