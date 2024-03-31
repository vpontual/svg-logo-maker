// Including needed packages for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown.js");

// Function to ensure the user does enter more than 3 characters
function validateLength(input) {
  if (input.length > 3) {
    return "Please enter at most up to 3 characters.";
  }
  return true;
}

// Function to ensure that the user enters a valid color name or hex code
function validateColor(input) {
  if (input.length > 3) {
    return "Please enter a valide color name or hex code";
  }
  return true;
}

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message:
      "Please enter the text that you would like to display, up to 3 characters:",
    validate: validateLength,
  },
  {
    type: "input",
    name: "text_color",
    message: "Please enter a color for this text:",
    validate: validateColor,
  },
  {
    type: "list",
    name: "shapes",
    message: "Please choose from one of the following shapes:",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter a color for this shape:",
    validate: validateColor,
  },
];
