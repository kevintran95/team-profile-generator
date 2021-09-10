const fs = require('fs')
const inquirer = require("inquirer")

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

// Manager questions
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team managers name?',
        },
        {
            type:'input',
            name:'id',
            message:'What is your team managers id?',
        },
        {
            type:'input',
            name: 'email',
            message:'What is your team managers email?',
        },
        {
            type:'input',
            name:'officeNumber',
            message: 'What is your team managers office number?',
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager)
    })
};
