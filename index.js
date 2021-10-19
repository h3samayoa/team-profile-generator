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
    ])
}

