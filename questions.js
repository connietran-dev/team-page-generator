const managerQuestions = [
    {
        type: 'input',
        message: "This application will generate an HTML page for your software engineering team. An engineering team consists of a manager and any number of engineers & interns. First, what is your manager's name?",
        name: 'mgrName',
        default: 'Ann Pleasant',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's employee ID?",
        name: 'mgrId',
        default: '116',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's email address?",
        name: 'mgrEmail',
        default: 'testmgr@test.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's office number?",
        name: 'mgrOffice',
        default: '423',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid office number is required.");
            }
            return true;
        }
    },
];


const confirmEmployee = [
    {
        type: 'confirm',
        message: "Next, would you like to add another team member to the team?",
        name: 'confirmEmp'
    }
];

const employeeType = [
    {
        type: 'list',
        message: "Would you like to add an Engineer or Intern to the team?",
        choices: ['Engineer', 'Intern'],
        name: 'empRole'
    }
];


const engineerQuestions = [
    {
        type: 'input',
        message: "What is your software engineer's name?",
        name: 'engName',
        default: 'Connie Tran',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your engineer's employee ID?",
        name: 'engId',
        default: '296',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your engineer's email address?",
        name: 'engEmail',
        default: 'connietrandev@gmail.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub? (No @ needed)",
        name: 'engGithub',
        default: 'connietran-dev',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub is required.");
            }
            return true;
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'internName',
        default: 'Ryan Howard',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your intern's employee ID?",
        name: 'internId',
        default: '685',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your intern's email address?",
        name: 'internEmail',
        default: 'rhoward@theoffice.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your intern's university?",
        name: 'internSchool',
        default: 'Georgia Institute of Technology',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid school is required.");
            }
            return true;
        }
    }
];

module.exports = {
    manager: managerQuestions,
    create: confirmEmployee,
    employee: employeeType,
    engineer: engineerQuestions,
    intern: internQuestions
};