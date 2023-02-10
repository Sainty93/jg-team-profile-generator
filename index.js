const Manager = require('.lib/manager.js');
const Engineer = require('.lib/Enginner.js');
const Intern = require('.lib/Intern.js');
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./lib/questions');

inquirer.createPromptModule(questions);

const generateHTML = require('./dist/generateHTML.js');
const { isNumberObject } = require('util/types');

const teamMembers =[];

generateHTML(teamMembers);
fs.writeFileSync('index.html', generateHTML, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log ('Your HTML file has been genrrated.');
    }
});

const createTeam = async () => {
    return await inquirer
    .prompt([
        {
            type: 'list',
            name: 'team_role',
            message: 'Please select the type of team member you would liketo join.',
            choices: ['Engineer', 'Intern', 'I do not want to add a team member.'],
        },
    ])
    .then(asyn, function (response) {
        if (response.team_role === 'Engineer') {
            return await inquirer
            .prompt(questions.enginnerQuestions)
            .then (function (engineerInput){
                const enginner = new Enginner(
                    enginnerInput.enginner_name,
                    enginnerInput.enginner_id,
                    enginnerInput.enginner_email,
                    enginnerInput.enginner_github
                );
                teamMembers.push(engineer);
            });
    }  else if (response.team_role === 'Intern') {
            return await inquirer
            .prompt(questions.internQuestions)
            .then(function (internInput) {
               const intern =new Intern(
                internInput.intern_name,
                internInput.intern_id,
                internInput.intern_email,
                internInput.intern_school
               );
               teamMembers.push(intern);
     });
    } else (response.team_role === 'I do not want to add team member.') {

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



