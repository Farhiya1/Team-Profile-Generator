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

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the name of this engineer?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the ID of this engineer?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineers email address?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the Github address of this engineer?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        console.log(engineer);
        engineer.title = "engineer";

        teamMembers.push(engineer);
        chooseNextTeamMember();
      });

    console.log("Adding Engineer....");
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the name of this intern?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the ID of this intern?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the interns email address?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is the name of the school?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        intern.title = "intern";
        console.log(intern);
        teamMembers.push(intern);
        chooseNextTeamMember();
      });
    console.log("Adding Intern.....");
  }
// Calling function to initialize App
init();
