// External packages
const inquirer = require('inquirer');
const fs = require('fs');

// Internal modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const questions = require('./questions');
const render = require('./lib/htmlRenderer');


// Array to contain all employee objects to render HTML
const employees = [];


// ------------------------------------------------------------------

// Function to create a manager object
async function createManager() {
    let managerResponses = await inquirer.prompt(questions.manager);

    // Create new object from class and add to employee array
    let newManager = new Manager
        (managerResponses.mgrName,
            managerResponses.mgrId,
            managerResponses.mgrEmail,
            managerResponses.mgrOffice);

    employees.push(newManager);

    console.log("Thanks! We've added a new manager to the team: ", newManager);
};


// Function to ask if they'd like to create a new team member
async function confirmEmployee() {

    // Would you like to add another team member?
    let confirmEmployee = await inquirer.prompt(questions.create);

    switch (confirmEmployee.confirmEmp) {
        case false:
            console.log("Thank you for your input so far. Here are your team members: ", employees);
            console.log('Generating your HTML page next...');
            return;

        // If yes, they'd like to add another team member, ask whether they'd like to create an Engineer or Intern
        case true:
            await createEmployee();
    };
};


// Function to create Engineer or Intern
async function createEmployee() {

    // Would you like to add an Engineer or Intern?
    let employeeRole = await inquirer.prompt(questions.employee);

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
            await confirmEmployee();
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
            await confirmEmployee();
    };

};



// ------------------------------------------------------------------

// Main function
async function init() {
    try {
        /* 
        Code to use Inquirer to gather information about development team members. Based of responses, objects are created for each team member based off classes.
        */

        // Collect information about required Manager role and create a Manager object
        await createManager();

        // Next, ask if they'd like to create another team member and createEmployee() within confirmEmployee function
        await confirmEmployee();

    } catch (error) {
        console.log(error);
    };

    try {
        /* After the user has input all employees desired, call the render function and pass an array containing all employee objects.

        The render function will generate and return a block of HTML including templated divs for each employee. */
        let renderedHTML = render(employees);


        /* Take HTML returned from render() function and write to file named team.html in the docs folder */
        // I have named it docs instead of output so that the page appears on GitHub pages
        fs.writeFileSync('./docs/index.html', renderedHTML);

        console.log('Success! Your HTML page has been generated in the docs folder.')

    } catch (error) {
        console.log(error);
    }

};

init();