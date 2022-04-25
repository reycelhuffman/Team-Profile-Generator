const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require('./starter/lib/Engineer');
const Intern = require('./starter/lib/Intern');
const Manager = require('./starter/lib/Manager');

inquirer
    .prompt([
        
        {
            type: 'input',
            name: 'name',
            message: "Enter name here",
            },
        {
            type: 'list'
            name: "role",
            message: "What is your role?"
            choices: [
                "enginner",
                "intern",
                "manager",  
            ]
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            
        }
