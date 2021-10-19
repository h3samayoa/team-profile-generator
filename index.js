import gen from './src/gen';
import Manager from './lib/Manager';
import Intern from './lib/Intern';
import Engineer from './lib/Engineer';

import fs from 'fs';
import inquirer from 'inquirer';

const arr = [];

const importManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Input in the Manager's name: ",
            validate: input => {
                if (input.length == 0) {
                    console.log('Enter a name!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Input in the Manager's Id: ",
            validate: input => {
                if (isNaN(input)) {
                    console.log('enter a number!')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Input the Manager's email: ",
            validate: input => {
                input = value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
                if (input) {
                    return true;
                } else {
                    return 'Enter a valid email!';
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Input the Manager's Officer Numbers: ",
            validate: input => {
                if (isNaN(input)) {
                    console.log('Enter a number!');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        arr.push(manager);
        console.log(manager);
    })
};

const employeeInput = () => {
    console.log('Add Employees');

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select the type of Employee: ",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Input the Employee's name: ",
            validate: input => {
                if(input.length == 0) {
                    console.log('Enter a name!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Input the Employee's ID number: ",
            validate: input => {
                if(isNaN(input)) {
                    console.log('Enter a Number!')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Input the Employee's email: ",
            validate: input => {
                input = value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
                if (input) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the Engineer's github username: ",
            when: (input) => input.role === 'Engineer',
            validate: input => {
                if (input.length == 0) {
                    console.log('Enter a valid username!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the Intern's school: ",
            when: (input) => input.role === 'Intern',
            validate: input => {
                if (input.length == 0) {
                    console.log('Enter a valid School!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Add more team members?',
            default: false
        }
    ]).then(employeeRes => {
        let {name, id, email, role, github, school, confirmAddEmployee} = employeeRes;
        let employee;

        if (role == 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } else if (role == 'Intern') {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }

        arr.push(employee);

        if (confirmAddEmployee) {
            return employeeInput(arr);
        } else {
            return arr;
        }
    })
};


