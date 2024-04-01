// importing the shapes.js file to test the various classes
const Shapes = require("./shapes.js");
// creating general variables to be used in all the tests
const shapeColor = "black";
const textColor = "white";
const text = "ABC";

describe("Shapes", () => {
  //testing the render() function in the generic Shapes class
  it("should create an intance of the Shapes class with a working render function", () => {
    const shapes = new Shapes.Shapes(shapeColor);
    const svgRect = `<rect x="50" y="0" width="200" height="200" fill="${shapeColor}" />`;
    expect(shapes.render(text, textColor, svgRect)).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" y="0" width="200" height="200" fill="black" /><text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>'
    );
  });
  //testing the render() function in the Triangle shape class
  it("should create a triangle with all svg properites filled in", () => {
    const shapes = new Shapes.Triangle(shapeColor);
    expect(shapes.render(text, textColor)).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150,0 0,200 300,200" fill="black" /><text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>'
    );
  });
  //testing the render() function in the Square shape class
  it("should create a square with all svg properites filled in", () => {
    const shapes = new Shapes.Square(shapeColor);
    expect(shapes.render(text, textColor)).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" y="0" width="200" height="200" fill="black" /><text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>'
    );
  });
  //testing the render() function in the Circle shape class
  it("should create a circle with all svg properites filled in", () => {
    const shapes = new Shapes.Circle(shapeColor);
    expect(shapes.render(text, textColor)).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="100" fill="black" /><text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>'
    );
  });
});
