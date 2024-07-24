// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title' //2
    },
    {
        type: 'input',
        message: 'What was your motivation for this project and what problem does it address?',
        name: 'motivation' //5
    },
    // {
    //     type: 'input',
    //     message: 'What did you learn while making it?',
    //     name: 'lesson' //8
    // },
    // {
    //     type: 'input',
    //     message: 'Is there anything about it that is different or unusual?',
    //     name: 'differentiators' //11
    // },
    // {
    //     type: 'input',
    //     message: 'Please describe the process to install this program:',
    //     name: 'howToInstall' //14
    // },
    // {
    //     type: 'input',
    //     message: 'Please describe how this program is used:',
    //     name: 'howToUse' //17
    // },
    // {
    //     type: 'input',
    //     message: 'What license will this be released under?',
    //     name: 'license' //20
    // },
    // {
    //     type: 'input',
    //     message: 'Please name everyone involved with this project',
    //     name: 'contributors'  //23
    // },
    // {
    //     type: 'input',
    //     message: 'How would someone test this program?',
    //     name: 'tests'  //26
    // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let readMeString = "";
    console.log(` Title: ${data.title} \n Motive: ${data.motivation}`);
    
    readMeString = `
# TEST

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.
    `;

    fs.mkdir('result', {recursive: true}, (err) =>
        err ? console.error(err) : console.log('Directory creation was successful!')
    );
    fs.writeFile(fileName, readMeString, (err) =>
        err ? console.error(err) : console.log('File creation was successful!')
    );
        
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response)=>{
            console.log(response);
            writeToFile('./result/README.md', response);
        })
         
}

// Function call to initialize app
init();
