const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

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
    message: "What command should be run to run tests?",
    name: "Test"
},

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
