const managerQuestions = [
    {
        type: 'input',
        message: "This application will generate an HTML page for your software engineering team. An engineering team consists of a manager and any number of engineers & interns. First, what is your manager's name?",
        name: 'mgrName',
        default: 'Ann',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid manager name is required.");
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
                return console.log("A valid manager email address is required.");
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
                return console.log("A valid manager office number is required.");
            }
            return true;
        }
    },
];

module.exports = {
    manager: managerQuestions
};