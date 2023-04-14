const inquirer = require("inquirer")
const fs = require('fs');
const { Circle, Triangle, Square } = require("./shapes");

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters

// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square

// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line

// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered


class CLI {
  run() {
    // TODO using inquirier create prompts to help render your svg
    return  inquirer.prompt(
      {
        type: 'input',
        name: 'text',
        message: 'Enter text. Must be up to 3 characters in length:',
      },
      {
        type: 'input',
        name: 'text color',
        message: 'Enter text color (keyword or hex code):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'What shape yould you like your logo to be?',
        choices: [
          Circle, 
          Square, 
          Triangle, 
        ],
      },
      {
        type: 'input',
        name: 'shape color',
        message: 'Enter text. Must be up to 3 characters in length:',
      },
      {
        type: 'input',
        name: 'text color',
        message: 'Enter text color (keyword or hex code):',
      },
    )
    .then((answers) => {
      const htmlPageContent = generateHTML(answers);
  
      fs.writeFile('logo.svg', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg!')
      );
    });
  }

  // TODO using your inquirer data use fs to write your svg file
  

}

module.exports = CLI;
