const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require("./lib/Employee");



    //Manager function
    const promptUser= () => {
        return inquirer.prompt([
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
                    name: 'officeNumber',
                    message: 'What is your officeNumber?',
                },
                {
                    type: 'list',
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
                    name: 'school',
                    message: 'Where do you go to school?',
                },
                {
                    type: 'input',
                    name: 'gitHub',
                    message: 'What is your gitHub email?',
                }
            ])
            .then((response) => {
                console.log (response); 
                let Employee = new Employee(response.name, response.id,response.email,response.role, response.officeNumber, response.school, response.gitHub)
                const generateHTML = ({ response.name, response.id, response.email, response.officeNumber, response.role, response.school, response.gitHub }) =>
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
                                        <h4 class="card-title">Name ${response.name}</h4>
                                        <h5 class="card-title">Role ${response.role}</h5>
                                        <ul class="list">
                                            <li class="listItems">ID ${response.id}</li>
                                            <li class="listItems">Email${response.email}</li>
                                            <li class="listItems">Office Number${response.officeNumber}</li>
                                            <li class="listItems">School${response.school}</li>
                                            <li class="listItems">gitHub${response.gitHub}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>    
                        </section>
                    </section>
                </body>
                </html>`;
            })
        }


    const init = () => {
        promptUser()
          // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
    };
    
    init();

    