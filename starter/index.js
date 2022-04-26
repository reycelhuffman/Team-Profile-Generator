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
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel="stylesheet" href="./starter/dist/styles.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    </head>
    
    <body>
        <header class="headerTitle">My Team</header>
        <section class="flexBoxTop">
            <section class="topCards">
                <div class="card-group">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Name</h4>
                            <h5 class="card-title">Role</h5>
                            <ul class="list">
                                <li class="listItems">ID</li>
                                <li class="listItems">Email</li>
                                <li class="listItems">Office Number</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Name</h4>
                            <h5 class="card-title">Role</h5>
                            <ul class="list">
                                <li class="listItems">ID</li>
                                <li class="listItems">Email</li>
                                <li class="listItems">GitHub</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Name</h4>
                            <h5 class="card-title">Role</h5>
                            <ul class="list">
                                <li class="listItems">ID</li>
                                <li class="listItems">Email</li>
                                <li class="listItems">GitHub</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        <section class="flexBoxBottom">
            <section class="bottomCards">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Name</h4>
                        <h5 class="card-title">Role</h5>
                        <ul class="list">
                            <li class="listItems">ID</li>
                            <li class="listItems">Email</li>
                            <li class="listItems">GitHub</li>
                        </ul>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Name</h4>
                        <h5 class="card-title">Role</h5>
                        <ul class="list">
                            <li class="listItems">ID</li>
                            <li class="listItems">Email</li>
                            <li class="listItems">GitHub</li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
        <script src="./starter/__tests__/Employee.test.js"></script>
    </body>
    
    </html>`;

    const init = () => {
        promptUser()
          // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
    };
    
    init();



    //choice function to pick what type of role
    
    //intern function

    //engineer function

    //generate html

//     <p>Email:<a href="mailto:${response.Email}">${response.Email}</a></p>
// <p>GitHub:<a href="https://github.com/${response.EngineerGithub}">${response.EngineerGithub}</a></p>