const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

function validateText(input) {
    return input.length <= 3 ? true : 'Text must be up to three characters.';
  }

// Function to validate color input (either keyword or hex code)
function validateColor(input) {
  // Add validation logic for color input (keyword or hex code)
  const validKeyword = /^([a-zA-Z]+)$/; // Example: Only letters
  const validHexCode = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/; // Example: #123456 or #abc

  if (validKeyword.test(input) || validHexCode.test(input)) {
    return true; // Input is valid
  }

  return 'Invalid color. Enter a color keyword or a hexadecimal number.';
}

// Function to start the application
async function start() {
  try {
    // Use inquirer to collect user input with color validation
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: validateText,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hex code):',
        validate: validateColor,
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hex code):',
        validate: validateColor,
      },
    ]);

    // Create the selected shape and set its color
    let shape;
    switch (userInput.shape) {
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Circle':
        shape = new Circle();
        break;
      case 'Square':
        shape = new Square();
        break;
    }
    shape.setColor(userInput.shapeColor);

    // Generate the SVG logo with the specified dimensions and shape
const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`;


    // Write the SVG to a file
    fs.writeFileSync('logo.svg', svg);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Start the application
start();
