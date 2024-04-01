// creating a general Shapes class with attributes that will be used in all of the shapes defined later
class Shapes {
  constructor(color) {
    this.color = color;
  }
  render(text, textColor, svgShape) {
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgShape}${svgText}</svg>`;
  }
}

// creating the Square shape class and pulling in the attributes from the Shapes class needed
class Square extends Shapes {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const svgSquare = `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
    return super.render(text, textColor, svgSquare);
  }
}

// creating the Circle shape class and pulling in the attributes from the Shapes class needed
class Circle extends Shapes {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const svgCircle = `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    return super.render(text, textColor, svgCircle);
  }
}

// creating the Triangle shape class and pulling in the attributes from the Shapes class needed
class Triangle extends Shapes {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const svgTriangle = `<polygon points="150,0 0,200 300,200" fill="${this.color}" />`;
    return super.render(text, textColor, svgTriangle);
  }
}

// Function to generate the SVG based on user input
function generateSVG(text, textColor, shape, shapeColor) {
  let svgShape;

  switch (shape) {
    case "Square":
      svgShape = new Square(shapeColor);
      break;
    case "Circle":
      svgShape = new Circle(shapeColor);
      break;
    case "Triangle":
      svgShape = new Triangle(shapeColor);
      break;
    default:
      throw new Error("Invalid shape provided");
  }

  return svgShape.render(text, textColor);
}

// exporting all classes and functions that will need to be used for testing and in the index.js file
module.exports = { Shapes, Square, Circle, Triangle, generateSVG };
