const Manager = require('./lib/Manager');
const Engineer = require('./lib/Enginner');
const Intern = require('.lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
const generateHTML = require('./src/generateHTML');

const teamMembers =[];

const createManager = () => {
    console.log('')
   // return await inquirer
   // .prompt({

//const createTeam = async () => {
   return inquirer.prompt(questions.managerQuestions.then((managerInput) => {
        const manager = new Manager(
            managerInput.manager_name,
            managerInput.manager_id,
            managerInput.manager_email,
            managerInput.manager_officeNumber
        );
        teamMembers.push(manager);
        console.log(manager);

        createTeam();

        });
};
    const createTeam =() => {
        return inquirer
        .prompt([
            {
                type: 'list',
                name: 'team_role',
                message:
                'Please select the type of team member you would like to create: ',
                choices: ['Enginner', 'Intern', 'I do not want to add a team member.'],
            },
        ])
        .then(function (data) {
            if(data.team_role === 'Engineer') {
                return inquirer
                .prompt(questions.engineerQuestions)
                .then(function (engineerInput) {
                    const engineer = new Engineer(
                        engineerInput.engineer_name,
                        engineerInput.engineer_id,
                        engineerInput.engineer_email,
                        engineerInput.engineer_github
                    );
                    teamMembers,push(enginner);
                    console.log(engineer);
                    createTeam();
                });
            }  else if (data.team_role === 'Intern') {
                return inquirer
                .prompt(questions.internQuestions)
                .then(function (internInput) {
                    const intern = new Intern(
                        internInput.intern_name,
                        internInput.intern_id,
                        internInput.intern_email,
                        internInput.school
                    );
                    teamMembers.push(intern);
                    console.log(intern);
                    createTeam();
                });
            } else if (data.team_role === 'I do not want to add team member.')  {
                console.log('New team has been created.');
                const teamProfilePage = new Promise((resolve, reject) => {
                    resolve(generateHTML(teamMembers));
                });
                teamProfilePage
                .then((data) => {
                    return fs.writeFile(data);
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        });
    };

    //still need to make corrections//

    
                internInput.intern_school
               );
               teamMembers.push(intern);
     });
    } else if (response.team_role === 'I do not want to add team member.') {
            console.log('The new team has been created');
            return;
    }
    });
};
const createManager = async ()  => {
    return await
    inquirer.prompt(questions.managerQuestions).then((input) => {
        const manager = new Manager (
        isNumberObject.manager_name,
        input.manager_id,
        input.manager_email,
        input.manager_officeNUm
    );
    teamMembers.push(manager);

    createTeam();
    });
};

function init() {
    console.log(`Welcome to Team Profile Generator, lets create your team: `);
    createManager();
}

init();



