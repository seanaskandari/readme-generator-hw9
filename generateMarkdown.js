// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Homework: README Generator
  
  # Table of Contents

  ## Description
  * [Description](#Description)

  ## Installation
  * [Installation](#Installation)

  ## Usage
  * [Usage](#Usage)

  ## Contributing
  * [Contributing](#Contributing)

  ## Tests
  * [Tests](#Tests)

  ## Questions
  * [Questions](#Questions)

  ## Username :
  ${data.Username}

  ## Email :
  ${data.Email}

  ## Name :
  ${data.Name}

  ## Description :
  ${data.Description}

  ##



`;
}

module.exports = generateMarkdown;
