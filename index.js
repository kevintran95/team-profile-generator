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

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type:'list',
            name:'role',
            message:'Please choose your employees position',
            choices:['Engineer', 'Intern']
        },
        {
            type:'input',
            name:'name',
            message:'What is the name of the employee?',
        },
        {
            type:'input',
            name:'id',
            message:'Enter the employees ID',
        },
        {
            type:'input',
            name:'email',
            message:'Enter the employees email address',
        },
        {
            type: 'input',
            name:'github',
            message:'Enter the employees github username',
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the interns school',
            when: (input) => input.role === "Inter",
        },
        {
            type:'confirm',
            name:'confirmAddEmployee',
            message:'I dont want to add anymore team members',
            default: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        }else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};