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
const OutputDirectory = path.resolve(_dirname, "Output");
