const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

inquirer
    .prompt([
        
        {
            type: 'input',
            name: 'name',
            message: "Enter name here",
            },
        {
            type: 'checkbox',
            name: "role",
            message: "What is your role?",
            choices: [
                "engineer",
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
    ])

    .then((response) => {
        console.log (response); 
    })


    //Manager function
    function createManager() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter name here",
            },
            {

            },
            {

            },
            {
                
            }
        ])

        .then((response) => {
            console.log (response); 
            let manager = new Manager(response.name)


        })
    }

    //choice function to pick what type of role
    
    //intern function

    //engineer function

    //generate html