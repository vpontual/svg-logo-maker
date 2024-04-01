class Shapes {
  constructor(color) {
    this.color = color;
  }
  render(text, textColor, svgRect) {
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgRect}${svgText}</svg>`;
  }
}

// Square class
class Square extends Shapes {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const svgRect = `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
    return super.render(text, textColor, svgRect);
  }
}

// Circle class
class Circle extends Shapes {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const svgRect = `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    return super.render(text, textColor, svgRect);
  }
}

// Triangle class
class Triangle extends Shapes {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const svgRect = `<polygon points="150,0 0,200 300,200" fill="${this.color}" />`;
    return super.render(text, textColor, svgRect);
  }
}

// Function to generate SVG based on user input
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

module.exports = { Shapes, Square, Circle, Triangle, generateSVG };
