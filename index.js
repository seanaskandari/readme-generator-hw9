const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

// array of questions for user
const questions = [{
    type: "input",
    message: "What is your GitHub username?",
    name: "Username",
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email",
}, {
    type: "input",
    message: "What is the name of your project?",
    name: "Name",
}, {
    type: "input",
    message: "Please write a short description of your project?",
    name: "Description",
}, {
    type: "input",
    message: "What kind of license should your project have?",
    name: "License",
}, {
    type: "input",
    message: "What command should be run to install dependents?",
    name: "Dependents",
}, {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "Usage",
}, {
    type: "input",
    message: "What does the user need to know about contributing to the repo",
    name: "Contribution"
}, {
    type: "input",
    message: "What command should be used to run tests?",
    name: "Tests"
},

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err){
            return console.log(err);
        }
        console.log("New README Generate!")
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    });

}

// function call to initialize program
init();
