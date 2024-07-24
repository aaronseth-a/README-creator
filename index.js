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
        name: 'description01' //5
    },
    {
        type: 'input',
        message: 'What did you learn while making it?',
        name: 'description02' //8
    },
    {
        type: 'input',
        message: 'Is there anything about it that is different or unusual?',
        name: 'description03' //11
    },
    {
        type: 'input',
        message: 'Please describe the process to install this program:',
        name: 'installation' //14
    },
    {
        type: 'input',
        message: 'Please describe how this program is used:',
        name: 'usage' //17
    },
    {
        type: 'list',
        message: 'What license will this be released under?',
        name: 'license',
        choices: [
           'Creative Commons',
           'MIT',
           'GNU',
           'ISC'
        ]
         //20
    },
    {
        type: 'input',
        message: 'Please name everyone involved with this project',
        name: 'contributors'  //23
    },
    {
        type: 'input',
        message: 'How would someone test this program?',
        name: 'tests'  //26
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let readMeString = "";
    console.log(` Title: ${data.title} \n Motive: ${data.motivation}`);
    switch(data.license){
        case 'Creative Commons': licenseDescription='This license enables reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use. CC BY includes the following: credit must be given to the creator.';
            licenseBadge ='[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)';
            break;
        case 'MIT': licenseDescription='Copyright <YEAR> <COPYRIGHT HOLDER> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';
            licenseBadge='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'GNU': licenseDescription='You may copy, distribute and modify the software as long as you track changes/dates in source files. Any modifications to or software including (via compiler) GPL-licensed code must also be made available under the GPL along with build & install instructions.';
            licenseBadge='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'ISC': licenseDescription='Copyright (c) <year>, <copyright holders> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies. THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.';
            licenseBadge='[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
    }



    readMeString = `
# ${data.title}
${licenseBadge}

## TABLE OF CONTENTS
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)

## DESCRIPTION
${data.description01} ${data.description02} ${data.description03}

## INSTALLATION
${data.installation}

## USAGE
${data.usage}

## LICENSE
${licenseDescription}

## CONTRIBUTORS
${data.contributors}

## TESTS
${data.tests}
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
