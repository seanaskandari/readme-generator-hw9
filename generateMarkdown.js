// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Homework: README Generator
  
  ## Table of Contents
  
  * [Description](###Description)
  * [License](###License)
  * [Installation](###Installation)
  * [Tests](###Tests)
  * [Usage](###Usage)
  * [Contributions](###Contributions)

  ## Username :
  ${data.Username}

  ## Email :
  ${data.Email}

  ## Name :
  ${data.Name}

  ## Description :
  ${data.Description}

  ## License :
  ${data.License}

  ## Dependents :
  ${data.Dependents}

  ## Usage :
  ${data.Usage}

  ## Contribution :
  ${data.Contribution}

  ## Test :
  ${data.Test}



`;
}

module.exports = generateMarkdown;
