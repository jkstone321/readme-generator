// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch(license) {
    case "MIT":
      badge = "[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "APACHE 2.0":
      badge = "[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case "GPL 3.0":
      badge = "[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "BSD 3":
      badge = "[License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch(license) {
    case "MIT":
      link = "(https://opensource.org/licenses/MIT)";
      break;
    case "APACHE 2.0":
      link = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      link = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3":
      link = "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
  
  [!${renderLicenseBadge(license)}]${renderLicenseLink(license)}`
  } else {
    return;
  }
}

function renderPreviewSection(imageLink) {
  if(imageLink !== ""){ 
    return `## Preview

  ![website/application screenshot](${imageLink})
  `;
  }else{
    return "";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.desc}

  ## Table of Contents

  - [Preview](#preview)

  - [Installation](#installation)

  - [Usage](#usage)

  - [Credits](#credits)

  - [License](#license)

  - [Contact Me](#contact)
  
  ${renderPreviewSection(data.picture)}
  
  ## Installation
  
  ${data.installInstructions}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.contribute}
  
  ${renderLicenseSection(data.license)}
  
  ## Contact
  
  GitHub: ${data.gitUser}

  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
