//===========================================================================================//
//MY MAIN TODO LIST                                                                          //   
//first i want to ask the user all of the questions and make sure                            //   
//that i can access all of their answers                                                     //
//second i want to generate the readme based on the answers that the user gave               //
//===========================================================================================//

// TODO: Include packages needed for this application
//inquirer, fs, generateMarkdown
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",
    "Enter a short description about your project",
    "Would you like to add a picture of the application? If so enter the URL or the path to image in an assets folder",
    "How do I install the modules needed?",
    "How do I use this application?",
    "How can I contribute to this application?",
    "How can do I test this application?",
    "What kind of license should your project have?",
    "What is your GitHub username?",
    "What is your email address?"
];
inquirer
    .prompt([
        {
            type: "input",
            name: "pTitle",
            message: questions[0],
        },
        {
            type: "input",
            name: "desc",
            message: questions[1],
        },
        // {
        //     type: "input",
        //     name: "picture",
        //     message: questions[2],
        // },
        // {
        //     type: "input",
        //     name: "installInstructions",
        //     message: questions[3],
        // },
        // {
        //     type: "input",
        //     name: "usage",
        //     message: questions[4],
        // },
        // {
        //     type: "input",
        //     name: "contribute",
        //     message: questions[5],
        // },
        // {
        //     type: "input",
        //     name: "test",
        //     message: questions[6],
        // },
        // {
        //     type: "list",
        //     name: "license",
        //     message: questions[7],
        //     choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        // },
        // {
        //     type: "input",
        //     name: "gitUser",
        //     message: questions[8],
        // },
        // {
        //     type: "input",
        //     name: "email",
        //     message: questions[9],
        // },
    ])
    .then((data) => {
        writeToFile("README.md", data);
    })
    .catch((err) => {

    })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), "utf-8", (err) => {err ? console.log(err) : console.log("Success!")})
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
