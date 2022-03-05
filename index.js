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
const OUT_DIRECTORY = path.resolve(__dirname, "output");

// Joining folder and file path
const outputPath = path.join(OUT_DIRECTORY, "team.html");

//Team members in an array
const teamMembers = [];

// Function to initialize App
function init() {
  console.log("Application is Running....");
  // Using inquirer prompt to ask questions for each team member
  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "nameOfManager",
          message: "What is the name of the manager in this team?",
        },
        {
          type: "input",
          name: "managerID",
          message: "What is the managers ID?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the email of this manager?",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the office number for the manager in this team?",
        },
      ])
      // Then returns answers
      .then((answers) => {
        const manager = new Manager(
          answers.nameOfManager,
          answers.managerID,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        manager.title = "manager";
        // console.log(Manager);
        teamMembers.push(manager);
        chooseNextTeamMember();
      });
    console.log("Adding Manager....");
}


// Calling function to initialize App
init();
