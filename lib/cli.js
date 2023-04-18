const inquirer = require("inquirer")
const fs = require('fs');
const { Circle, Triangle, Square } = require("./shapes");

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line

// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered


class CLI {
  constructor() {}
  run() {
    // TODO using inquirier create prompts to help render your svg
    return  inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter text for your logo. Must be up to 3 characters in length:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex code):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'What shape yould you like your logo to be?',
        choices: [
          "Circle", 
          "Square", 
          "Triangle", 
        ],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex code):',
      },
    ])
    .then((answers) => {
      console.log(answers)
      if (answers.shape === "Circle") {
        fs.writeFile('logo.svg', Circle, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg!')
        );
      } else if (answers.shape === "Square") {
        console.log("hello world");
        fs.writeFile('logo.svg', Square, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg!')
        );
      } else {
        fs.writeFile('logo.svg', Triangle, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg!')
        );
      }
  
    //   fs.writeFile('logo.svg', Circle, (err) =>
    //     err ? console.log(err) : console.log('Generated logo.svg!')
    //   );
    })
    .catch((err) => {
      console.log(err);
      console.log('Oops. Something went wrong.');
    });
  }

  // TODO using your inquirer data use fs to write your svg file
  

}

module.exports = CLI;
