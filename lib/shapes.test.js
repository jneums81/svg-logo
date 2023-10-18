const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  it('should render an SVG for a triangle with the given color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });

  it('should have the default color as black', () => {
    const shape = new Triangle();
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="black" />');
  });
  // Add more test cases as needed
});

describe('Circle', () => {
  it('should render an SVG for a circle with the given color', () => {
    const shape = new Circle();
    shape.setColor('green');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });
  // Add more test cases as needed
});

describe('Square', () => {
  it('should render an SVG for a square with the given color', () => {
    const shape = new Square();
    shape.setColor('red');
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
  });
  // Add more test cases as needed
});
