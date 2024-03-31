// Square class
class Square {
  constructor(color) {
    this.color = color;
  }

  render(text, textColor) {
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;
    const svgRect = `<rect x="10" y="10" width="100" height="100" fill="${this.color}" />`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">${svgRect}${svgText}</svg>`;
  }
}

// Circle class
class Circle {
  constructor(color) {
    this.color = color;
  }

  render(text, textColor) {
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;
    const svgRect = `<circle cx="25" cy="75" r="100" fill="${this.color}" />`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">${svgRect}${svgText}</svg>`;
  }
}

// Triangle class
class Triangle {
  constructor(color) {
    this.color = color;
  }

  render(text, textColor) {
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;
    const svgRect = `<polygon points="100,10 150,190 50,190" fill="${this.color}" />`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">${svgRect}${svgText}</svg>`;
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

module.exports = { Square, Circle, Triangle, generateSVG };
