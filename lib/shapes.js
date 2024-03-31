class Shapes {
  constructor(color) {
    this.color = color;
  }
}

// Square class
class Square extends Shapes {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    const svgRect = `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgRect}${svgText}</svg>`;
  }
}

// Circle class
class Circle extends Shapes {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    const svgRect = `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgRect}${svgText}</svg>`;
  }
}

// Triangle class
class Triangle extends Shapes {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    const svgRect = `<polygon points="150,0 0,200 300,200" fill="${this.color}" />`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgRect}${svgText}</svg>`;
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
