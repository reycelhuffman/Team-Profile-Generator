const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require("./lib/Employee");


inquirer
    .prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "Enter manager name here",
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the managers id number?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the managers email?',
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is your officeNumber?',
    },
    {
        type: 'input',
        name: 'firstEngineerName',
        message: 'What is the first engineers name?',
    },
    {
        type: 'input',
        name: 'firstEngineerId',
        message: 'What is the first engineers id?',
    },
    {
        type: 'input',
        name: 'firstEngineerEmail',
        message: 'What is the first engineers email?',
    },
    {
        type: 'input',
        name: 'firstEngineerGitHub',
        message: 'What is the first engineers github?',
    },
    {
        type: 'input',
        name: 'secondEngineerName',
        message: 'What is the second engineers name?',
    },
    {
        type: 'input',
        name: 'secondEngineerId',
        message: 'What is the second engineers id?',
    },
    {
        type: 'input',
        name: 'secondEngineerEmail',
        message: 'What is the second engineers email?',
    },
    {
        type: 'input',
        name: 'secondEngineerGitHub',
        message: 'What is the second engineers github?',
    },
    {
        type: 'input',
        name: 'thirdEngineerName',
        message: 'What is the third engineers name?',
    },
    {
        type: 'input',
        name: 'thirdEngineerId',
        message: 'What is the third engineers id?',
    },
    {
        type: 'input',
        name: 'thirdEngineerEmail',
        message: 'What is the third engineers email?',
    },
    {
        type: 'input',
        name: 'thirdEngineerGitHub',
        message: 'What is the third engineers github?',
    },
    {
        type: 'input',
        name: 'internName',
        message: 'What is the interns name?',
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is the interns id?',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the interns email?',
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What is the interns school?',
    },
])
.then((response) => {
    let content = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="./dist/styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>

<body>
<header class="headerTitle">My Team</header>
<section class="topCards">
    <div class="card-group">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Name: ${response.managerName}</h4>
                <h5 class="card-title">Role:☕ Manager</h5>
                <ul class="list">
                    <li class="listItems">ID: ${response.managerId}</li>
                    <li class="listItems">Email: <a href="mailto:${response.managerEmail}">
                    ${response.managerEmail}</a></li>
                    <li class="listItems">Office Number:${response.managerOfficeNumber}</li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Name: ${response.firstEngineerName}</h4>
                <h5 class="card-title">Role: 👓Engineer 1</h5>
                <ul class="list">
                    <li class="listItems">ID: ${response.firstEngineerId}</li>
                    <li class="listItems">Email: <a href="mailto:${response.firstEngineerEmail}">${response.firstEngineerEmail}</a></li>
                    <li class="listItems">gitHub: <a href="https://github.com/${response.firstEngineerGitHub}">${response.firstEngineerGitHub}</a></li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Name: ${response.secondEngineerName}</h4>
                <h5 class="card-title">Role: 👓Engineer</h5>
                <ul class="list">
                    <li class="listItems">ID: ${response.secondEngineerId}</li>
                    <li class="listItems">Email: <a href="mailto:${response.secondEngineerEmail}">${response.secondEngineerEmail}</a></li>
                    <li class="listItems">gitHub: <a href="https://github.com/${response.secondEngineerGithub}">${response.secondEngineerGitHub}</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section class="bottomCards">
<div class="card-group">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">Name: ${response.thirdEngineerName}</h4>
            <h5 class="card-title">Role:👓 Engineer</h5>
            <ul class="list">
                <li class="listItems">ID: ${response.thirdEngineerId}</li>
                <li class="listItems">Email: <a href="mailto:${response.thirdEngineerEmail}">${response.thirdEngineerEmail}</a></li>
                <li class="listItems">gitHub: <a href="https://github.com/${response.thirdEngineerGitHub}">${response.thirdEngineerGitHub}</a></li>
            </ul>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">Name: ${response.internName}</h4>
            <h5 class="card-title">Role:🎓 Intern</h5>
            <ul class="list">
                <li class="listItems">ID: ${response.internId}</li>
                <li class="listItems">Email: <a href="mailto:${response.internEmail}">${response.internEmail}</a></li>
                <li class="listItems">School: ${response.internSchool}</li>
                
            </ul>
        </div>
    </div>
</div>    
</section>
</body>
    </html>`;
    fs.writeFile('index.html', content, (error) => console.error(error))
})



    