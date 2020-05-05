const inquirer = require('inquirer');
const util = require('util');

const questions = require('./questions');
const Manager = require('./lib/Manager');

async function init() {
    try {
        
        // Code to use Inquirer to gather information about development team members
        // Based of responses, objects are created for each team member based off classes

        const managerResponses = await inquirer.prompt(questions.manager);
        
        console.log("Thank you for your responses: ", managerResponses);

        const newManager = new Manager(managerResponses.mgrName, managerResponses.mgrId,
        managerResponses.mgrEmail,
        managerResponses.mgrOffice);

        console.log("We've create a new manager from your responses: ", newManager);


    } catch (error) {
        console.log(error);
    }

};

init();