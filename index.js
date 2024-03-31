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
  const hexRegex = /^#[0-9A-F]{6}$/i;
  const validColorNames = [
    "red",
    "green",
    "blue",
    "black",
    "white",
    "yellow",
    "orange",
    "purple",
    "pink",
    "gray",
  ];
  if (hexRegex.test(input)) {
    return true;
  }
  return validColorNames.includes(input.toLowerCase());
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

// Function to generate and save SVG based on user input
async function generateAndSaveSVG() {
  try {
    const answers = await inquirer.prompt(questions);
    const svg = generateSVG(
      answers.text,
      answers.text_color,
      answers.shapes,
      answers.usage
    );

    await fs.promises.writeFile("logo.svg", svg);

    console.log("Generated logo.svg");
  } catch (error) {
    console.error(error);
  }
}

generateAndSaveSVG();
