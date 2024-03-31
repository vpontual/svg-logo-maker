// Import shape classes (replace with your actual file path)
const Square = require("./lib/shapes/Square");
const Circle = require("./Assets/circle.svg");
const Triangle = require("./lib/shapes/Triangle");

// Function to generate SVG based on user input
function generateSVG(text, textColor, shape, shapeColor) {
  // Implement logic to build SVG string based on shape (use Square, Circle, Triangle classes)
  // Example for Square:
  if (shape === "Square") {
    const square = new Square(shapeColor);
    return square.render(text, textColor); // Call render method of Square class
  }
  if (shape === "Circle") {
    const square = new Circle(shapeColor);
    return square.render(text, textColor); // Call render method of Square class
  }
  if (shape === "Triangle") {
    const square = new Triangle(shapeColor);
    return square.render(text, textColor); // Call render method of Square class
  }
}

module.exports = generateSVG;
