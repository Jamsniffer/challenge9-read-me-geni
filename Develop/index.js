// TODO: Include packages needed for this application
let inquirer = require('inquirer')
const MarkDown = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is the project title?',
        name: 'title',
        validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
    },
    {
        type: 'input',
        message: 'how do you install your app?',
        name: 'installation',
        validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
    },
    {
        type: 'input',
        message: 'Description of project',
        name: 'description',
        validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
    },
    {
        type: 'input',
        message: 'any credits?',
        name: 'credits',
        validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
    },
    {
        type: 'input',
        message: 'how do you use your app?',
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
    },
    // {
    //     type: 'input',
    //     message: 'how do you install your app?',
    //     name: 'installation',
    //     validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
    // },
    //license's
    {
        type: 'list',
        message: 'which licenses apply to this app?',
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
        validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
    },
    {
        type: 'input',
        message: 'Github username:',
        name: 'git',
        validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
    },
    {
        type: 'input',
        message: 'E-mail:',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
    },
]

// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const mark = MarkDown.generateReadMe(answers);
            fs.writeFile('README.md', mark, function (err) {
                if (err) {
                    console.log('Could not save file', err)
                } else {
                    console.log('Success: new README.md file generated inside the current folder')
                }
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function call to initialize app
init();
