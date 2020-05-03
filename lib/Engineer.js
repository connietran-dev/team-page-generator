// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Employee constructors are name, id, email
        super(name, id, email);

        // Constructors unique to Engineer
        this.github = github;
        this.role = "Engineer";
    }

    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;