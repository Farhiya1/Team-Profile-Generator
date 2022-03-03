const Employee = require("./Lib/Employee.js");
const Manager = require("./Lib/Manager.js");
const Engineer = require("./Lib/Engineer.js");
const Intern = require("./Lib/Intern.js");

// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const renderTeamHtml = require("./src/generateHTML");

// Creating path for output folder
const outputDirectory = path.resolve(__dirname, "output");

// Joining folder and file path
const outputPath = path.join(outputDirectory, "team.html");

//Team members in an array
const teamMembers = [];

// Function to initialize App
function init() {
  console.log("Application is Running....");
}


// Calling function to initialize App
init();
