// Including needed packages for this application
const inquirer = require("inquirer");
const fs = require("fs");
// Importing shape classes and generation function
const makeShapes = require("./lib/shapes.js");

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
function generateAndSaveSVG() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const { text, text_color, shapes, usage } = answers;
      const svgContent = makeShapes.generateSVG(
        text,
        text_color,
        shapes,
        usage
      );

      fs.writeFile("./examples/logo.svg", svgContent, (err) => {
        if (err) throw err;
        console.log("SVG file generated successfully!");
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

generateAndSaveSVG();
