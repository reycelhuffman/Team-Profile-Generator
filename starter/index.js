const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');



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
                type: 'checkbox',
            name: "role",
            message: "What is your role?",
            choices: [
                "engineer",
                "intern",
                "manager",  
            ] 
            }
        ])

        .then((response) => {
            console.log (response); 
            let manager = new Manager(response.name)
        })
    }
        // Intern function 
        function createIntern() {
        inquirer
        .prompt([

            {
                type: 'input',
                name: 'name',
                message: "Enter name here",
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
                type: 'input',
                name: 'email',
                message: 'What is your gitHub?',
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
            }
        ])
        .then((response) => {
            console.log (response); 
            let manager = new Intern(response.name)
        })
    }

    //engineer function
    function createEngineer() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter name here",
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
                type: 'input',
                name: 'school',
                message: 'Where do you go to school?',
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
            }
        ])

        .then((response) => {
            console.log (response); 
            let manager = new Engineer(response.name)
        })
    }

    const generateHTML = ({ name, id, email, gitHub, officeNumber, school, role }) =>
    



    //choice function to pick what type of role
    
    //intern function

    //engineer function

    //generate html

//     <p>Email:<a href="mailto:${response.Email}">${response.Email}</a></p>
// <p>GitHub:<a href="https://github.com/${response.EngineerGithub}">${response.EngineerGithub}</a></p>
 