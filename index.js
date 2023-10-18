const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to start the application
async function start() {
  try {
    // Use inquirer to collect user input
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => {
          // Add validation logic for the text input
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hex code):',
        validate: (input) => {
          // Add validation logic for the text color input
        },
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
        validate: (input) => {
          // Add validation logic for the shape color input
        },
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

    // Generate the SVG logo
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
