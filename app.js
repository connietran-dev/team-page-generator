// External packages
const inquirer = require('inquirer');
const util = require('util');

// Internal modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const questions = require('./questions');
const render = require('./lib/htmlRenderer');

// Main function
async function init() {
    try {

        /* 
        Code to use Inquirer to gather information about development team members. Based of responses, objects are created for each team member based off classes.
        */

        // Collect information about required Manager role
        let managerResponses = await inquirer.prompt(questions.manager);

        let newManager = new Manager
            (managerResponses.mgrName,
                managerResponses.mgrId,
                managerResponses.mgrEmail,
                managerResponses.mgrOffice);

        const employees = [];

        employees.push(newManager);

        console.log("Thanks! We've added a new manager to the team: ", newManager);


        // Next, ask if they'd like to create another team member
        let createEmployee = await inquirer.prompt(questions.create);

        let employeeRole;

        switch (createEmployee.createEmp) {
            case false:
                console.log('Thank you for your input so far! Generating the HTML page next...')
                return;
            case true:
                employeeRole = await inquirer.prompt(questions.employee);
        };


        // If yes they'd like to add another team member, ask Engineer or Intern questions
        // Then create new object from class and add to employee array
        switch (employeeRole.empRole) {
            case 'Engineer':
                let engResponses = await inquirer.prompt(questions.engineer);
                let newEngineer = new Engineer
                    (engResponses.engName,
                        engResponses.engId,
                        engResponses.engEmail,
                        engResponses.engGithub);
                employees.push(newEngineer);
                console.log("Thanks! We've added a new engineer to the team: ", newEngineer);
                break;
            case 'Intern':
                let internResponses = await inquirer.prompt(questions.intern);
                let newIntern = new Intern
                    (internResponses.internName,
                        internResponses.internId,
                        internResponses.internEmail,
                        internResponses.internSchool);
                employees.push(newIntern);
                console.log("Thanks! We've added a new intern to the team: ", newIntern);
        };



        // After the user has input all employees desired, call the render function
        // and pass an array containing all employee objects
        // The render function will generate and return a block fo HTML including templated divs for each employee

        // console.log(render(employees));


    } catch (error) {
        console.log(error);
    }

};

init();