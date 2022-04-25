const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require('./starter/lib/Engineer');
const Intern = require('./starter/lib/Intern');
const Manager = require('./starter/lib/Manager');

inquirer
    .prompt([
        
        {
            type: 'input',
            name: 'title',
            message: "Title of your project",
            },